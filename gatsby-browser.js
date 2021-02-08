import "./static/fonts/fonts.css"


export const onClientEntry = () => {
  window.onload = () => { 
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const newColorScheme = e.matches ? "dark" : "light";
      console.log(newColorScheme)
    });
  }
}