// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ThemeService {

//   themes:any = {

//     blue:{
//       '--primary-color':'#2c3e50',
//       '--secondary-color':'#34495e',
//       '--accent-color':'#3498db'
//     },

//     green:{
//       '--primary-color':'#1e7e34',
//       '--secondary-color':'#28a745',
//       '--accent-color':'#20c997'
//     },

//     purple:{
//       '--primary-color':'#4b0082',
//       '--secondary-color':'#6f42c1',
//       '--accent-color':'#9b59b6'
//     },

//     orange:{
//       '--primary-color':'#d35400',
//       '--secondary-color':'#e67e22',
//       '--accent-color':'#f39c12'
//     }

//   }

//   setTheme(themeName:string){

//     const theme=this.themes[themeName]

//     Object.keys(theme).forEach(key=>{
//       document.documentElement.style.setProperty(key,theme[key])
//     })

//     localStorage.setItem('app-theme',themeName)

//   }

//   loadTheme(){

//     const savedTheme=localStorage.getItem('app-theme')

//     if(savedTheme){
//       this.setTheme(savedTheme)
//     }

//   }

// }


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  changeTheme(theme: string) {

    document.body.classList.remove(
      'theme-blue',
      'theme-green',
      'theme-purple',
      'theme-orange'
    );

    document.body.classList.add('theme-' + theme);

  }

}