export default function trackEvent(category, action, label, extra) {
    if( typeof window === 'undefined' || typeof window.dataLayer === 'undefined' ) {
      console.log("Google Tag Manager is not loaded", extra);
      return;
    }
    // console.log( `GTM event:` )
    // console.log( category )
    // console.log( action )
    // console.log( label )
    const eventData = {
      event: 'trackEvent',
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
      ...extra,
    };
    window.dataLayer.push([eventData]);
  }
  
  export function consoleErrorTracking() {
    var console = (function(oldCons, e){
      return {
          log: function(text, e){
                oldCons.log(text)
          },
          info: function (text) {
              oldCons.info(text);
          },
          warn: function (text) {
              oldCons.warn(text);
          },
          error: function (e) {
              oldCons.error(e);
              // console.log({
              //   category: 'JavaScript Error',
              //   action:'_trackEvent',
              //   label: e ? e.message: text.message,
              //   extra: `location: ${window.location.pathname}, 
              //    ${e && e ? `stack: ${e.stack}`: `stack: ${text.stack}`}`,
              // })
              trackEvent(
                'JavaScript Error',
                e.message,
                `location: ${window.location.pathname} 
                 ${e.stack ? `, stack: ${e.stack}`: ''}`,
              )
          }
      };
    }(window.console))
    window.console = console
  }
  