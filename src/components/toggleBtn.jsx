import styles from "./toggleBtn.module.css";



const Switch = ({isToggle, onToggle,varient}) => {
    let dynamicSwitch ;
    let dynamicSlider;

    if(varient === "over"){
        dynamicSwitch = styles.switchF;
        dynamicSlider = styles.sliderF
    }
    else{
        dynamicSwitch = styles.switch;
        dynamicSlider = styles.slider;
    }


  return (
    <label   className={dynamicSwitch}>
      <input  onChange={onToggle} checked={isToggle}  type="checkbox" />
      <span className={dynamicSlider}></span>
    </label>
  );
};
export default Switch;
