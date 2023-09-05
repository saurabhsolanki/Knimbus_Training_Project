import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLanguagesApi, getSelectedLanguageApi, updateSelectedLanguageApi } from '../../Redux/E-library/E_library.Action';
const MultiLanguage = () => {
  const dispatch = useDispatch();
  const { AllLanguages,SelectedLanguage } = useSelector((store) => store.eLibrary);
  const [selectedLanguage, setSelectedLanguage] = useState();


  const googleTranslateElementInit = () => {
    var timer = setInterval(checkScriptExists, 2000);
        function checkScriptExists(){
          var google_script_url = "//translate.google.com/translate_a/element.js";	 
          if(("script[src*='"+google_script_url+"']")[0]){
            // run google translate function
            new window.google.translate.TranslateElement(
              {
                pageLanguage: 'en', 
                autoDisplay: false
              }, 
              'google_translate_element'
              );
              clearInterval(timer);
              let googleTextNode=document.querySelector(".goog-te-gadget").childNodes[1]
              if(googleTextNode){
                googleTextNode.data=""
              }
            return;
        } 
    }
  };

  function setCookie(key, value, expiry) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
  }

  const handleSelect=(e)=>{
    setSelectedLanguage(e.target.value)
    const selectedValue = e.target.value;
    const selectedObject = AllLanguages.find((option) => option.code === selectedValue);
    localStorage.setItem("selectedLanguage", JSON.stringify(selectedObject));
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    setCookie('googtrans', `/en/${selectedObject.code || 'en'}`,1);
  }

  useEffect(() => {
    // for all languages
    dispatch(getAllLanguagesApi())
    const storedLanguage =JSON.parse(localStorage.getItem("selectedLanguage")) || 'en';


    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    setCookie('googtrans', `/en/${storedLanguage.code}`,1);
  }, []);

  return (
    <div className='d-flex gap-3'>
        <div id="google_translate_element"></div>

        <div id="selectDiv">
          <select id=''  onChange={handleSelect}>
            {
              AllLanguages.map((e,i)=>(
                <option key={i} value={e.code}>{e.name}</option>
              ))
            }
          </select>
        </div>
    </div>
  )
}

export default MultiLanguage
