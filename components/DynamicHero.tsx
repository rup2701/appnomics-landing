// DynamicHero.jsx
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './DynamicHero.module.scss';


const DynamicHero = () => {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isInteractive, setIsInteractive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // A mix of simple launches and larger product ideas
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const prompts = [
    "a landing page for your new business",
    "a booking page for your local service",
    "an online store for handmade products",
    "a portfolio for your creative work",
    "a waitlist page for your next big idea",
    "a client portal for your small team",
    "a newsletter signup and archive",
    "a dashboard for your growing business",
    "your idea here..."
  ];
  
  // Find the longest prompt for consistent width
  const longestPrompt = prompts.reduce((a, b) => a.length > b.length ? a : b, '');
  
  useEffect(() => {
    if (isInteractive) return; // Stop animation when user is typing
    
    const currentPrompt = prompts[currentPromptIndex];
    
    if (displayText.length < currentPrompt.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentPrompt.slice(0, displayText.length + 1));
      }, 70); // Typing speed
      return () => clearTimeout(timeout);
    } else {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDisplayText(''); // Reset for next prompt
        setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
    }
  }, [displayText, currentPromptIndex, prompts, isInteractive]);
  
  const handleInputClick = () => {
    setIsInteractive(true);
    setDisplayText('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };
  
  const handleNewSuggestion = () => {
    // Switch to interactive mode for user input
    setIsInteractive(true);
    setDisplayText('');
    setUserInput('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };
  
  const handleStartBuilding = () => {
    const idea = userInput || displayText || 'your MVP';
    // Navigate to contact or start flow
    console.log('Starting with:\n', idea);
    // You can add navigation here
  };
  
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        {/* Animated headline using your existing animation */}
        <h1 className={styles.heroTitle}>
              Your AI cofounder —<br />
              <span className="text-gray-400">without the equity split.</span>
        </h1>
        
        {/* Dynamic Prompt Section */}
        <div className={styles.promptContainer}>
          <div className={styles.promptBox} onClick={handleInputClick}>
            {!isInteractive ? (
              <div className={styles.typewriterText}>
                <span className={styles.promptPrefix}>Build </span>
                <span className={styles.dynamicText}>
                  <span className={styles.textWrapper}>
                    {/* Invisible text to maintain width */}
                    <span className={styles.hiddenText}>{longestPrompt}</span>
                    {/* Actual visible text */}
                    <span className={styles.visibleText}>
                      {displayText}
                      <span className={styles.cursor}>|</span>
                    </span>
                  </span>
                </span>
              </div>
            ) : (
              <div className={styles.interactivePrompt}>
                <span className={styles.promptPrefix}>Build </span>
                  
                <input
                  ref={inputRef}
                  type="text"
                  className={styles.userInput}
                  placeholder="your idea here..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleStartBuilding();
                    }
                  }}
                />
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <button 
              className={styles.suggestionBtn}
              onClick={handleNewSuggestion}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.shuffleIcon}>
                <path d="M2 10V14L5 11L2 8V10Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M14 6V2L11 5L14 8V6Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5 11H9C10.6569 11 12 9.65685 12 8C12 6.34315 10.6569 5 9 5H5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              New Suggestion
            </button>
            
            <button 
              className={styles.ctaBtn}
              onClick={handleStartBuilding}
            >
              <Link href="/auth">
                <span className={styles.sparkle}>✨</span>
                Start Building
                <span className={styles.arrow}>→</span>
              </Link>
            </button>
          </div>
        </div>
        
        {/* Trust Indicators
        <div className={styles.trustBar}>
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>20+</span>
            <span className={styles.trustLabel}>Products Shipped</span>
          </div>
          <div className={styles.trustDivider}>•</div>
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>$8M+</span>
            <span className={styles.trustLabel}>Raised by Founders</span>
          </div>
          <div className={styles.trustDivider}>•</div>
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>80%</span>
            <span className={styles.trustLabel}>Still Operating</span>
          </div>
        </div> */}
        
       
      </div>
      
      {/* Background elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb} />
        <div className={styles.gridPattern} />
      </div>
    </section>
  );
};

export default DynamicHero;