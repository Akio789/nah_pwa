import React, { useEffect , useState} from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import cn from "classnames";
    
function FlipCard({ exercise }) {
    const [showBack, setShowBack] = useState(false);

    function handleClick() {
      if (exercise.variant === "click") {
        setShowBack(!showBack);
      }
    }
  
    function handleFocus() { 
      if (exercise.variant === "focus") { 
        setShowBack(true); 
      } 
    } 
  
    function handleBlur() { 
      if (exercise.variant === "focus") { 
        setShowBack(false); 
      } 
    } 
  
    return (
      <div
        tabIndex={exercise.id} 
        className={cn("flip-card-outer", { 
          "focus-trigger": exercise.variant === "focus" 
        })} 
        onClick={handleClick}
        onFocus={handleFocus} 
        onBlur={handleBlur} 
      >
        <div
          className={cn("flip-card-inner", {
            showBack,
            "hover-trigger": exercise.variant === "hover"
          })}
        >
          <div className="card front">
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="card-text fs-1 fw-bold">{ exercise.question }</p>
            </div>
          </div>
          <div className="card back">
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="card-text fs-1 fw-bold">{ exercise.answer }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  export default FlipCard;