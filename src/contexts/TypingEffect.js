import React, { useEffect, useState } from 'react';

const TypingEffect = ({ words, speed = 200, clearSpeed = 1000, className }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isClearing, setIsClearing] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let typingTimeout, clearingTimeout;

        if (!isClearing) {
            if (displayedText.length < currentWord.length) {
                typingTimeout = setTimeout(() => {
                    setDisplayedText(prev => prev + currentWord[displayedText.length]);
                }, speed);
            } else {
                clearingTimeout = setTimeout(() => {
                    setIsClearing(true);
                }, clearSpeed);
            }
        } else {
            // Clearing effect
            if (displayedText.length > 0) {
                typingTimeout = setTimeout(() => {
                    setDisplayedText(prev => prev.slice(0, -1));
                }, speed);
            } else {
                // Move to the next word
                setIsClearing(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        }

        return () => {
            clearTimeout(typingTimeout);
            clearTimeout(clearingTimeout);
        };
    }, [displayedText, isClearing, wordIndex, words, speed, clearSpeed]);

    return <h4 className={`text-2xl font-light ${className}`}>{displayedText}</h4>;
};

export default TypingEffect;
