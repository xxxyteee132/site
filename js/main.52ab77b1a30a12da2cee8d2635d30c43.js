window.formApi='https://builder-api.timeweb.com/api/forms';const REWRITING_SCRIPTS_NAMES=['module-map','module-timer','module-slider']
const CORE_SCRIPTS_NAMES=[...REWRITING_SCRIPTS_NAMES,'module-button','module-form','module-cart','module-compare','module-animation','module-menu','module-step-animation','module-timer','module-video','module-zoom']
const SCRIPTS=['module-video.e8678a293416360c9b5f.js','module-form.13dc15d839ebfe4d4a81.js','module-menu.411552dc03c9732dad1a.js','module-button.f22050fd6fae7c674bc5.js']
const actualSortedScripts=SCRIPTS.filter(s=>CORE_SCRIPTS_NAMES.some(b=>s.startsWith(b))).sort(a=>REWRITING_SCRIPTS_NAMES.some(n=>a.startsWith(n))?-1:1)
const run=async(scripts)=>{for(const script of scripts){try{const module=await import(`./${script}`)
await module.default(SCRIPTS)}catch(e){console.error(e)}}}
run(actualSortedScripts)