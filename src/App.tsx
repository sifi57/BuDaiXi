import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions, maleCharacters, femaleCharacters, Character } from './data';
import { RefreshCw, ChevronRight } from 'lucide-react';

function App() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[][]>(Array(questions.length).fill([]));
  const [showResult, setShowResult] = useState(false);
  const [maleResult, setMaleResult] = useState<Character | null>(null);
  const [femaleResult, setFemaleResult] = useState<Character | null>(null);

  const handleOptionClick = (optionIndex: number) => {
    const currentSelected = answers[currentQuestion];
    let newSelected;
    if (currentSelected.includes(optionIndex)) {
      newSelected = currentSelected.filter(i => i !== optionIndex);
    } else {
      if (currentSelected.length >= 3) {
        return; // Max 3 options
      }
      newSelected = [...currentSelected, optionIndex];
    }
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = newSelected;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentQuestion].length === 0) return;
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const maleScores: Record<string, number> = {};
    const femaleScores: Record<string, number> = {};

    maleCharacters.forEach(c => maleScores[c.id] = 0);
    femaleCharacters.forEach(c => femaleScores[c.id] = 0);

    answers.forEach((selectedOptions, qIndex) => {
      selectedOptions.forEach(optionIndex => {
        const option = questions[qIndex].options[optionIndex];
        option.maleIds.forEach(id => {
          if (maleScores[id] !== undefined) maleScores[id]++;
        });
        option.femaleIds.forEach(id => {
          if (femaleScores[id] !== undefined) femaleScores[id]++;
        });
      });
    });

    let topMaleId = maleCharacters[0].id;
    let maxMaleScore = -1;
    for (const [id, score] of Object.entries(maleScores)) {
      if (score > maxMaleScore) {
        maxMaleScore = score;
        topMaleId = id;
      }
    }

    let topFemaleId = femaleCharacters[0].id;
    let maxFemaleScore = -1;
    for (const [id, score] of Object.entries(femaleScores)) {
      if (score > maxFemaleScore) {
        maxFemaleScore = score;
        topFemaleId = id;
      }
    }

    setMaleResult(maleCharacters.find(c => c.id === topMaleId) || maleCharacters[0]);
    setFemaleResult(femaleCharacters.find(c => c.id === topFemaleId) || femaleCharacters[0]);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill([]));
    setShowResult(false);
    setMaleResult(null);
    setFemaleResult(null);
  };

  const renderAnalysis = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => {
      const match = paragraph.match(/^(【.*?】)(.*)/s);
      if (match) {
        return (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-bold text-amber-500 mb-2">{match[1]}</h4>
            <p className="text-gray-300 leading-relaxed text-justify">{match[2].trim()}</p>
          </div>
        );
      }
      return <p key={index} className="text-gray-300 leading-relaxed text-justify mb-4">{paragraph}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-serif selection:bg-amber-900/50">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-neutral-950/50 via-transparent to-neutral-950/80"></div>
      
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 min-h-screen flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {!started ? (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-white pb-2 drop-shadow-md">
                  布袋戏人格镜像测试
                </h1>
                <p className="text-xl text-neutral-400 tracking-widest font-light">
                  在诗号与刀剑交织的江湖中，寻找你的灵魂倒影
                </p>
              </div>
              
              <div className="max-w-2xl mx-auto text-amber-500 leading-relaxed space-y-4 text-sm md:text-base">
                <p>
                  本测试包含15道文学性情境题，将从理性、感性、存在与社会四个象限，
                  深度剖析你的内在人格。
                </p>
                <p>
                  每道题可单选或多选（最多三项）。测试结束后，你将获得男相与女相两位布袋戏角色的镜像化身，
                  以及约1200字的深度性格解析。
                </p>
              </div>

              <button
                onClick={() => setStarted(true)}
                className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm border border-neutral-800 hover:border-amber-600/50 transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 text-lg tracking-[0.2em] text-neutral-300 group-hover:text-white transition-colors duration-300">
                  入局
                </span>
              </button>
            </motion.div>
          ) : !showResult ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-3xl"
            >
              <div className="mb-12 text-center">
                <span className="text-sm font-mono tracking-widest text-amber-600/80">
                  {String(currentQuestion + 1).padStart(2, '0')} / {questions.length}
                </span>
                <div className="mt-4 h-px w-full bg-neutral-900 relative">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-amber-600/50"
                    initial={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-sm tracking-widest text-neutral-500">
                    【 {questions[currentQuestion].dimension} 】
                  </h2>
                  <p className="text-2xl leading-relaxed text-neutral-200">
                    {questions[currentQuestion].scene}
                  </p>
                  <p className="text-xs text-neutral-500">（可多选，最多三项）</p>
                </div>

                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => {
                    const isSelected = answers[currentQuestion].includes(index);
                    return (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        className={`w-full text-left p-6 rounded-sm border transition-all duration-300 group relative overflow-hidden
                          ${isSelected 
                            ? 'border-amber-600/50 bg-amber-900/20' 
                            : 'border-neutral-800 hover:border-neutral-600 bg-neutral-900/30'}`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent opacity-0 transition-opacity duration-300
                          ${isSelected ? 'opacity-100' : 'group-hover:opacity-100'}`}></div>
                        <span className={`relative z-10 text-lg leading-relaxed transition-colors duration-300
                          ${isSelected ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                          {option.text}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-8 flex justify-end">
                  <button
                    onClick={handleNext}
                    disabled={answers[currentQuestion].length === 0}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-sm transition-all duration-300
                      ${answers[currentQuestion].length > 0
                        ? 'text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-700'
                        : 'text-neutral-600 cursor-not-allowed'}`}
                  >
                    <span className="tracking-widest">{currentQuestion === questions.length - 1 ? '观照' : '继续'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-5xl"
            >
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl tracking-widest text-neutral-400">灵魂镜像</h2>
                <div className="h-px w-24 bg-amber-600/50 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 md:gap-8">
                {/* Male Result */}
                <div className="space-y-8 p-8 border border-neutral-800 bg-neutral-900/20 rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 text-neutral-800 text-6xl font-black opacity-20 pointer-events-none">
                    男相
                  </div>
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-sm tracking-widest text-neutral-500">男相化身</h3>
                    <h2 className="text-4xl font-bold text-white tracking-wider">{maleResult?.name}</h2>
                    <p className="text-lg text-amber-500/80 italic leading-relaxed">
                      「{maleResult?.poem}」
                    </p>
                  </div>
                  <div className="prose prose-invert prose-neutral max-w-none">
                    {maleResult && renderAnalysis(maleResult.analysis)}
                  </div>
                </div>

                {/* Female Result */}
                <div className="space-y-8 p-8 border border-neutral-800 bg-neutral-900/20 rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 text-neutral-800 text-6xl font-black opacity-20 pointer-events-none">
                    女相
                  </div>
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-sm tracking-widest text-neutral-500">女相化身</h3>
                    <h2 className="text-4xl font-bold text-white tracking-wider">{femaleResult?.name}</h2>
                    <p className="text-lg text-amber-500/80 italic leading-relaxed">
                      「{femaleResult?.poem}」
                    </p>
                  </div>
                  <div className="prose prose-invert prose-neutral max-w-none">
                    {femaleResult && renderAnalysis(femaleResult.analysis)}
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center space-x-3 px-8 py-4 border border-neutral-800 hover:border-amber-600/50 text-neutral-400 hover:text-white transition-all duration-300 rounded-sm group"
                >
                  <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                  <span className="tracking-[0.2em]">重新入局</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
