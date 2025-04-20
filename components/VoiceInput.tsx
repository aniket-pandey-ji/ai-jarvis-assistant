'use client';
import { useState } from 'react';
import { Mic } from 'lucide-react';
import './voiceInput.css';

const VoiceInput = () => {
  const [listening, setListening] = useState(false);

    const toggleMic = () => {
        setListening(!listening);
            // Later we'll start/stop voice recognition here
              };

                return (
                    <div className="flex flex-col items-center gap-4">
                          <div
                                  className={`mic-container ${listening ? 'glow' : ''}`}
                                          onClick={toggleMic}
                                                >
                                                        <Mic size={48} />
                                                              </div>
                                                                    {listening && (
                                                                            <div className="wave-container">
                                                                                      <div className="wave"></div>
                                                                                                <div className="wave"></div>
                                                                                                          <div className="wave"></div>
                                                                                                                  </div>
                                                                                                                        )}
                                                                                                                            </div>
                                                                                                                              );
                                                                                                                              };

                                                                                                                              export default VoiceInput;