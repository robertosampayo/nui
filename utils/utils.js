// Constantes para la web app

const maxImageSizeAllowed = 700000;
export const validFileExtensions = [".jpg", ".pdf"];




export const getMobileOperatingSystem = () => {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

export const lazyLoad = () => {
    if (document.body.classList.contains('no-js')) document.body.classList.remove('no-js')

    const images = Array.from(document.getElementsByTagName('img'));

    var options = {
      root: null,
      rootMargin: '700px',
      threshold: [0, 0.5, 1]
    }
    
    if (!window.IntersectionObserver) {
      images.map(image => {
        if (!image.classList.contains('cargada') && image.dataset.src ) {
          image.src = image.dataset.src
          image.classList.add('cargada')
        }
      })
    } else {
      var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          const image = entry.target
          if (entry && entry.rootBounds && entry.boundingClientRect.bottom <= entry.rootBounds.bottom || entry.isIntersecting || entry.boundingClientRect < 1000 ) {
            if (!image.classList.contains('cargada') && image.dataset.src !== "undefined" && !image.src) {
              image.src = image.dataset.src
            }
            image.classList.add('cargada')
          }
        })
      }, options)
  
      images.map(image => observer.observe(image))
    }
}

export function requestTimeout(ms, promise) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error("timeout"))
    }, ms)
    promise.then(resolve, reject)
  })
}
 // funcion que elimina acentos espacio y etiquetas html en los id dinamicos
export const restoreId = restore =>{
  if(!restore || null) {
    return restore = "";
  } 
  return restore.normalize('NFD').replace(/[\u0300-\u036f]/g,"").replace(/ /g, '-').replace(/<[^>]*>?/g, '').toLowerCase()
}

export function deleteKeysPressed (e) {
  let key = e.keyCode || e.charCode;
  return key === 8 || key === 46 || key === 69
}

export function notNumberPressed (e) {
  let key = e.keyCode || e.charCode;
  return key === 69 || key === 190 || key === 187 || key === 186 || key === 107 || key === 109

}

export function maxLength (evt,max) {
  let value = evt.target.value;
  evt = (evt) ? evt : window.event;
  var iKeyCode = (evt.which) ? evt.which : evt.keyCode;
  if (!deleteKeysPressed(evt)) {
    value && (value.length + 1) > max ? evt.preventDefault():null;
    

  }

}

export function validFormatMail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}


export function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var iKeyCode = (evt.which) ? evt.which : evt.keyCode;
  if ( iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)){ // 83 69
      return false; 
  }
  return true;
}  

export function parseOnlyNumber(str) {
  const value = str.replace(/[&\/\\#,+()\-$~%.'´":*?<> {}^(a-z)]/g,'');
  // console.log(str.length);
  
  return str.length > 0 ? value: str.length === 0? '': null;
}

export function onlyNumber(evt) {
  evt = (evt) ? evt : window.event;
  let iKeyCode = (evt.which) ? evt.which : evt.keyCode;
  if (iKeyCode != 8 && iKeyCode != 0 && iKeyCode < 48 || iKeyCode > 57 || iKeyCode === 186 || iKeyCode === 187)
  {
     evt.preventDefault();
  }
  notNumberPressed(evt) ? evt.preventDefault():null;
  containsEspecialCharacters(evt);
}

export function containsEspecialCharacters(e) {
  var invalidChars = ["-", "e", "+", "E"];
  if(invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}



export function getExtensions () {
  let extensions = '';
  validFileExtensions.map(extension => {
    extensions =  `${extension.substring(1)}, ${extensions}`;
  });

  return `(${extensions.slice(0, -2)})`;
}
export function extensionsAreValid(images) {
    

    var expresion = '';
    for(var i in validFileExtensions) {
      expresion+= `\\${validFileExtensions[i]}|`;
    }

    var re = new RegExp(`(${expresion.slice(0, -1)})`,'i');
    var blnValid = false;
    for (var i = 0; i < images.length; i++) {
        var oInput = images[i];
        // console.log(oInput.obj);
        if (oInput) {
            var { obj: {name} } = oInput;
            if (name) {
                if(re.exec(name)){
                    blnValid = true;
                }else{
                  blnValid = false;
                  break;
                }
            }
        }
    }
  
    return blnValid;

}


export function validImagesSize  (images) {  

    let isValidImage = true;
    images.map((image) => {
      var objImage = image;
      if (objImage){
        var { obj: {size} } = objImage;
          if (size) {
              if(size > maxImageSizeAllowed){
                isValidImage = false;
              }
          }
      }
    });

    return isValidImage;

}