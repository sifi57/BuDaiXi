import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, RefreshCcw, Feather } from 'lucide-react';
import { questions, maleCharacters, femaleCharacters, Character } from './data';

interface ResultData {
  male: Character;
  female: Character;
}

export default function App() {
  const [gameState, setGameState] = useState<'START' | 'QUIZ' | 'CALCULATING' | 'RESULT'>('START');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const [maleScores, setMaleScores] = useState<Record<string, number>>({});
  const [femaleScores, setFemaleScores] = useState<Record<string, number>>({});
  
  const [resultData, setResultData] = useState<ResultData | null>(null);

  const handleStart = () => {
    setGameState('QUIZ');
    setCurrentQuestionIndex(0);
    
    // Initialize scores
    const initialMaleScores: Record<string, number> = {};
    maleCharacters.forEach(c => initialMaleScores[c.id] = 0);
    setMaleScores(initialMaleScores);
    
    const initialFemaleScores: Record<string, number> = {};
    femaleCharacters.forEach(c => initialFemaleScores[c.id] = 0);
    setFemaleScores(initialFemaleScores);
  };

  const handleOptionClick = (maleIds: string[], femaleIds: string[]) => {
    const newMaleScores = { ...maleScores };
    maleIds.forEach(id => {
      if (newMaleScores[id] !== undefined) newMaleScores[id] += 1;
    });
    setMaleScores(newMaleScores);

    const newFemaleScores = { ...femaleScores };
    femaleIds.forEach(id => {
      if (newFemaleScores[id] !== undefined) newFemaleScores[id] += 1;
    });
    setFemaleScores(newFemaleScores);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameState('CALCULATING');
      setTimeout(() => {
        calculateResult(newMaleScores, newFemaleScores);
      }, 2500);
    }
  };

  const calculateResult = (finalMaleScores: Record<string, number>, finalFemaleScores: Record<string, number>) => {
    let topMaleId = maleCharacters[0].id;
    let maxMaleScore = -1;
    for (const [id, score] of Object.entries(finalMaleScores)) {
      if (score > maxMaleScore) {
        maxMaleScore = score;
        topMaleId = id;
      }
    }

    let topFemaleId = femaleCharacters[0].id;
    let maxFemaleScore = -1;
    for (const [id, score] of Object.entries(finalFemaleScores)) {
      if (score > maxFemaleScore) {
        maxFemaleScore = score;
        topFemaleId = id;
      }
    }

    const maleChar = maleCharacters.find(c => c.id === topMaleId) || maleCharacters[0];
    const femaleChar = femaleCharacters.find(c => c.id === topFemaleId) || femaleCharacters[0];

    setResultData({
      male: maleChar,
      female: femaleChar
    });
    setGameState('RESULT');
  };

  const renderStart = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen p-6 text-center"
    >
      <div className="mb-8">
        <Feather className="w-12 h-12 mx-auto mb-6 text-yellow-600 opacity-80" />
        <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-widest mb-4 text-glow">
          布袋戏人格镜像测试
        </h1>
        <p className="text-gray-400 text-lg md:text-xl tracking-wide max-w-xl mx-auto leading-relaxed">
          在血雨腥风与诗酒风流之间，<br/>寻找那个与你灵魂共振的江湖倒影。
        </p>
      </div>
      
      <button 
        onClick={handleStart}
        className="group relative px-8 py-3 overflow-hidden rounded-sm bg-transparent border border-yellow-700/50 hover:border-yellow-500 transition-colors duration-500"
      >
        <div className="absolute inset-0 w-0 bg-yellow-900/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative flex items-center text-yellow-500 tracking-widest font-serif text-lg">
          入局 <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </button>
    </motion.div>
  );

  const renderQuiz = () => {
    const question = questions[currentQuestionIndex];
    return (
      <motion.div 
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col min-h-screen p-6 max-w-3xl mx-auto justify-center"
      >
        <div className="mb-12 text-center">
          <span className="text-yellow-700/60 text-sm tracking-widest font-serif mb-4 block">
            — 卷之{question.id} · {question.dimension} —
          </span>
          <h2 className="text-2xl md:text-3xl font-serif leading-relaxed text-gray-200">
            {question.scene}
          </h2>
        </div>

        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.maleIds, option.femaleIds)}
              className="w-full text-left p-6 glass-panel hover:bg-white/5 transition-all duration-300 group rounded-sm border-l-2 border-l-transparent hover:border-l-yellow-600"
            >
              <p className="text-gray-300 font-serif text-lg leading-relaxed group-hover:text-yellow-50 transition-colors">
                {option.text}
              </p>
            </button>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            {questions.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 w-8 rounded-full transition-all duration-500 ${
                  idx === currentQuestionIndex ? 'bg-yellow-600' : 
                  idx < currentQuestionIndex ? 'bg-yellow-900/50' : 'bg-gray-800'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderCalculating = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen p-6"
    >
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-t-2 border-yellow-600 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-r-2 border-yellow-800 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <Feather className="absolute inset-0 m-auto w-8 h-8 text-yellow-700 opacity-50" />
      </div>
      <p className="text-xl font-serif tracking-widest text-gray-400 animate-pulse">
        勘破命盘，寻觅倒影...
      </p>
    </motion.div>
  );

  const renderResult = () => {
    if (!resultData) return null;

    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen py-16 px-6 max-w-5xl mx-auto"
      >
        <div className="text-center mb-16">
          <p className="text-yellow-600/80 tracking-widest text-sm mb-4 font-serif">你的灵魂镜像</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-glow mb-2">
            {resultData.male.name} × {resultData.female.name}
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Male Character */}
          <div className="glass-panel p-8 rounded-sm relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-900/10 rounded-bl-full -z-10 group-hover:bg-yellow-900/20 transition-colors"></div>
            <h3 className="text-gray-400 text-sm tracking-widest mb-2">男相化身</h3>
            <h2 className="text-3xl font-serif text-yellow-500 mb-6">{resultData.male.name}</h2>
            <p className="font-serif text-gray-300 italic leading-loose border-l-2 border-yellow-800/50 pl-4 mb-8">
              "{resultData.male.poem}"
            </p>
            <div className="mt-auto">
              <div className="space-y-4 font-serif text-gray-400 leading-relaxed text-justify">
                {resultData.male.analysis.split('\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('【')) {
                    return <h4 key={idx} className="text-lg text-yellow-600/90 mt-4 mb-2">{paragraph}</h4>;
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>
            </div>
          </div>

          {/* Female Character */}
          <div className="glass-panel p-8 rounded-sm relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-900/10 rounded-br-full -z-10 group-hover:bg-yellow-900/20 transition-colors"></div>
            <h3 className="text-gray-400 text-sm tracking-widest mb-2">女相化身</h3>
            <h2 className="text-3xl font-serif text-yellow-500 mb-6">{resultData.female.name}</h2>
            <p className="font-serif text-gray-300 italic leading-loose border-l-2 border-yellow-800/50 pl-4 mb-8">
              "{resultData.female.poem}"
            </p>
            <div className="mt-auto">
              <div className="space-y-4 font-serif text-gray-400 leading-relaxed text-justify">
                {resultData.female.analysis.split('\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('【')) {
                    return <h4 key={idx} className="text-lg text-yellow-600/90 mt-4 mb-2">{paragraph}</h4>;
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pb-12">
          <button 
            onClick={handleStart}
            className="inline-flex items-center px-6 py-3 text-gray-400 hover:text-yellow-500 transition-colors font-serif tracking-widest"
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            重入江湖
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen selection:bg-yellow-900/50 selection:text-yellow-100">
      <AnimatePresence mode="wait">
        {gameState === 'START' && renderStart()}
        {gameState === 'QUIZ' && renderQuiz()}
        {gameState === 'CALCULATING' && renderCalculating()}
        {gameState === 'RESULT' && renderResult()}
      </AnimatePresence>
    </div>
  );
}
