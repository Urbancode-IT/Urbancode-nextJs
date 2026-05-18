"use client";
import React, { useState } from 'react';
import './KidsInteractiveGame.css';
import { FaPlay, FaUndo, FaArrowRight, FaLightbulb, FaEye } from 'react-icons/fa';

const levelConfigs = {
    1: { gridLength: 5, target: 3, obstacles: [], hint: "Move the robot forward 3 times using the 'Step' block!" },
    2: { gridLength: 5, target: 4, obstacles: [2], hint: "Look out! There is a crack 🕳️ at spot 2. Use 'Jump' to leap over it!" },
    3: { gridLength: 6, target: 5, obstacles: [2, 4], hint: "Double danger! Jump over the rock 🪨 and the crack 🕳️ to reach the star safely!" },
    4: { gridLength: 6, target: 4, obstacles: [1, 3], hint: "Leap over two cracks by chaining two jumps!" },
    5: { gridLength: 7, target: 6, obstacles: [2, 3], hint: "Big obstacle in the middle! Jump 3 times to get to the star!" },
    6: { gridLength: 6, target: 5, obstacles: [3], hint: "A crack 🕳️ is at spot 3. Try Jump, Step, and Jump!" },
    7: { gridLength: 7, target: 5, obstacles: [2, 4], hint: "Jump twice, then take one Step forward!" },
    8: { gridLength: 7, target: 6, obstacles: [1, 4], hint: "Obstacles are at 1 and 4. Jump to 2, Step to 3, Jump to 5, and Step to 6!" },
    9: { gridLength: 8, target: 7, obstacles: [2, 5], hint: "Obstacles are at spot 2 and 5! Try Step, Jump, Step, Jump, Step!" },
    10: { gridLength: 8, target: 7, obstacles: [1, 3, 5], hint: "Chain jumps to avoid all the cracks, then Step to the target!" }
};

const answers = {
    1: ['step', 'step', 'step'],
    2: ['step', 'jump', 'step'],
    3: ['step', 'jump', 'jump'],
    4: ['jump', 'jump'],
    5: ['jump', 'jump', 'jump'],
    6: ['jump', 'step', 'jump'],
    7: ['jump', 'jump', 'step'],
    8: ['jump', 'step', 'jump', 'step'],
    9: ['step', 'jump', 'step', 'jump', 'step'],
    10: ['jump', 'jump', 'jump', 'step']
};

export default function KidsInteractiveGame({ onUnlockClick, levelsUnlocked }) {
    // 0: Start, 1: Playing animation, 2: Success, 3: Crashed
    const [gameState, setGameState] = useState(0); 
    const [robotPosition, setRobotPosition] = useState(0);
    const [commands, setCommands] = useState([]);
    const [currentLevel, setCurrentLevel] = useState(1);

    const config = levelConfigs[currentLevel] || levelConfigs[1];
    const targetPosition = config.target;
    const gridLength = config.gridLength;
    const obstacles = config.obstacles;

    const addCommand = (cmd) => {
        if (gameState !== 0) return;
        if (commands.length < 6) {
            setCommands([...commands, cmd]);
        }
    };

    const resetGame = () => {
        setGameState(0);
        setRobotPosition(0);
        setCommands([]);
    };

    const showAnswer = () => {
        if (gameState === 0) {
            setCommands(answers[currentLevel] || ['step']);
        }
    };

    const handleNextLevel = () => {
        if (currentLevel === 3 && !levelsUnlocked) {
            onUnlockClick();
            return;
        }

        if (currentLevel < 10) {
            setCurrentLevel(prev => prev + 1);
            setGameState(0);
            setRobotPosition(0);
            setCommands([]);
        } else {
            onUnlockClick(); // Opens enquiry form to enroll
        }
    };

    const runCode = () => {
        if (commands.length === 0 || gameState !== 0) return;
        
        setGameState(1);
        let currentPos = 0;
        let step = 0;
        
        const interval = setInterval(() => {
            if (step >= commands.length) {
                clearInterval(interval);
                if (currentPos === targetPosition) {
                    setGameState(2); // Success!
                } else {
                    setGameState(3); // Failed / Missed target
                    setTimeout(() => {
                        resetGame();
                    }, 1500);
                }
                return;
            }
            
            const cmd = commands[step];
            if (cmd === 'step') {
                currentPos = Math.min(currentPos + 1, gridLength - 1);
            } else if (cmd === 'jump') {
                currentPos = Math.min(currentPos + 2, gridLength - 1);
            }
            
            setRobotPosition(currentPos);
            
            if (obstacles.includes(currentPos)) {
                clearInterval(interval);
                setGameState(3); // Crashed!
                setTimeout(() => {
                    resetGame();
                }, 1500);
                return;
            }
            
            step++;
        }, 600);
    };

    return (
        <div className="kids-game-container">
            <div className="kids-game-header">
                <span className="kids-category-tag">Icebreaker Activity</span>
                <h3 className="kids-title">Level {currentLevel}: Help the Robot reach the Star!</h3>
                <p className="kids-subtitle">Use standard logic blocks to guide the robot. Avoid the obstacles!</p>
                
                <div className="hint-box">
                    <div className="hint-text">
                        <FaLightbulb className="hint-icon" />
                        <span><strong>Hint:</strong> {config.hint}</span>
                    </div>
                    <button className="icon-btn answer-btn" onClick={showAnswer} disabled={gameState !== 0}>
                        <FaEye /> Show Answer
                    </button>
                </div>
            </div>
            
            {/* Game Grid */}
            <div className="kids-game-grid">
                {Array.from({ length: gridLength }).map((_, idx) => {
                    const isObstacle = obstacles.includes(idx);
                    const obstacleEmoji = isObstacle ? (idx % 2 === 0 ? '🪨' : '🕳️') : null;
                    return (
                        <div key={idx} className={`kids-game-cell ${idx === targetPosition ? 'target-cell' : ''} ${isObstacle ? 'obstacle-cell' : ''}`}>
                            {idx === targetPosition && gameState !== 2 && <span className="game-icon star-icon">⭐</span>}
                            {idx === robotPosition && (
                                <span className={`game-icon robot-icon ${gameState === 3 ? 'crashed' : ''}`}>
                                    {gameState === 3 && obstacles.includes(robotPosition) ? '💥' : '🤖'}
                                </span>
                            )}
                            {obstacleEmoji && idx !== robotPosition && <span className="game-icon obstacle-icon">{obstacleEmoji}</span>}
                        </div>
                    );
                })}
            </div>

            {/* Controls Workspace */}
            <div className="kids-game-workspace">
                <div className="blocks-palette kids-panel">
                    <h4 className="panel-title">Action Blocks</h4>
                    <div className="blocks-buttons-flex">
                        <div className="block-wrapper">
                            <button 
                                className="code-block-btn step-btn" 
                                onClick={() => addCommand('step')}
                                disabled={gameState !== 0}
                            >
                                ➡️ Step (+1)
                            </button>
                        </div>
                        <button 
                            className="code-block-btn jump-btn" 
                            onClick={() => addCommand('jump')}
                            disabled={gameState !== 0}
                            style={{ marginTop: '12px' }}
                        >
                            ➡️➡️ Jump (+2)
                        </button>
                    </div>
                </div>
                
                <div className="code-editor kids-panel">
                    <div className="editor-header">
                        <h4 className="panel-title">Your Moves</h4>
                        <div className="editor-actions">
                            <button className="icon-btn run-btn" onClick={runCode} disabled={gameState !== 0 || commands.length === 0}>
                                <FaPlay /> Run
                            </button>
                            <button className="icon-btn reset-btn" onClick={resetGame} disabled={gameState === 1}>
                                <FaUndo /> Reset
                            </button>
                        </div>
                    </div>
                    <div className="code-sequence">
                        {commands.length === 0 && <span className="empty-msg">Click blocks to build your program!</span>}
                        {commands.map((cmd, i) => (
                            <div key={i} className={`sequence-block ${cmd}-block`}>
                                {cmd === 'step' ? '➡️ Step' : '➡️➡️ Jump'}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Success Overlay */}
            {gameState === 2 && (
                <div className="kids-game-success">
                    <div className="success-modal">
                        <div className="confetti-effect"></div>
                        <h2>You did it!</h2>
                        <p>You solved the puzzle and passed Level {currentLevel}!</p>
                        <div className="success-stars">
                            {Array.from({ length: Math.min(currentLevel, 5) }).map((_, i) => <span key={i}>⭐</span>)}
                        </div>
                        {currentLevel < 3 ? (
                            <>
                                <p className="next-level-msg">Awesome logic skills! Ready for Level {currentLevel + 1}?</p>
                                <button className="unlock-btn" onClick={handleNextLevel}>
                                    Play Level {currentLevel + 1} <FaArrowRight style={{marginLeft: '8px'}}/>
                                </button>
                            </>
                        ) : currentLevel === 3 && !levelsUnlocked ? (
                            <>
                                <p className="next-level-msg">Amazing job! You passed all 3 free levels!</p>
                                <p className="unlock-instruction-msg" style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>
                                    Fill out our quick enquiry form to instantly unlock Levels 4 to 10 and continue your learning adventure!
                                </p>
                                <button className="unlock-btn enroll-btn" onClick={handleNextLevel}>
                                    Unlock Levels 4-10 <FaArrowRight style={{marginLeft: '8px'}}/>
                                </button>
                            </>
                        ) : currentLevel < 10 ? (
                            <>
                                <p className="next-level-msg">Excellent logic! Ready for Level {currentLevel + 1}?</p>
                                <button className="unlock-btn" onClick={handleNextLevel}>
                                    Play Level {currentLevel + 1} <FaArrowRight style={{marginLeft: '8px'}}/>
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="next-level-msg">Incredible! You completed all 10 levels of the challenge! 🚀🏆</p>
                                <button className="unlock-btn enroll-btn" onClick={handleNextLevel}>
                                    Book Free Demo & Enroll <FaArrowRight style={{marginLeft: '8px'}}/>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Fail Overlay (comical) */}
            {gameState === 3 && (
                <div className="kids-game-fail">
                    <div className="fail-modal">
                        <div className="fail-emoji-spin">😵💫</div>
                        <h2>💥 OOPSIE! 💥</h2>
                        <p className="fail-msg">The robot did a silly spin and tripped! 🤖🤸</p>
                        <p className="fail-action-alert">🛠️ Quick! Let's dust it off and try again!</p>
                    </div>
                </div>
            )}
        </div>
    );
}
