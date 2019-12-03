// import React from 'react';
// import {SettingsPane, SettingsPage, SettingsContent, SettingsMenu} from 'react-settings-pane'

// class Settings extends React.Component {

// 	render() {
//         // You will maybe receive your settings from this.props or do a fetch request in your componentWillMount
//          //let settings = settings;
        
//          // But here is an example of how it should look like:
//          let settings = {
//            'mysettings.general.name': 'Dennis Stücken',
//            'mysettings.general.color-theme': 'purple',
//            'mysettings.general.email': 'dstuecken@react-settings-pane.com',
//            'mysettings.general.picture': 'earth',
//            'mysettings.profile.firstname': 'Dennis',
//            'mysettings.profile.lastname': 'Stücken',
//          };
        
//          // Define your menu
//          const menu = [
//            {
//              title: 'General',          // Title that is displayed as text in the menu
//              url: '/settings/general'  // Identifier (url-slug)
//            },
//            {
//              title: 'Profile',
//              url: '/Profile'
//            }
//          ];
        
//          // Define one of your Settings pages
//          const dynamicOptionsForProfilePage = [
//            {
//              key: 'mysettings.general.email',
//              label: 'E-Mail address',
//              type: 'text',
//            },
//            {
//              key: 'mysettings.general.password',
//              label: 'Password',
//              type: 'password',
//            }
//          ];
        
//          // Save settings after close
//          const leavePaneHandler = (wasSaved, newSettings, oldSettings) => {
//            // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.
        
//            if (wasSaved && newSettings !== oldSettings) {
//              // do something with the settings, e.g. save via ajax.
//            }
//          };
         
//          const settingsChanged = (changedSettings) => {
//            // this is triggered onChange of the inputs
//          };

//          const Wrapper = styled("div")`
//          background: ${props => props.theme.background};
//          width: 100vw;
//          height: 100vh;
//          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
//          h1 {
//            color: ${props => props.theme.body};
//          }`;
        
//          // Return your Settings Pane
        
//         return (
//             // <SettingsPane items={menu} index="/settings/general" settings={settings} onPaneLeave={leavePaneHandler}>
//             //   <SettingsMenu headline="General Settings" />
//             //   <SettingsContent closeButtonClass="secondary" saveButtonClass="primary" header={true}>
//             //     <SettingsPage handler="/settings/general">
//             //        <fieldset className="form-group">
//             //          <label for="profileName">Name: </label>
//             //          <input type="text" className="form-control" name="mysettings.general.name" placeholder="Name" id="general.ame" onChange={settingsChanged} defaultValue={settings['mysettings.general.name']} />
//             //        </fieldset>
//             //        <fieldset className="form-group">
//             //          <label for="profileColor">Color-Theme: </label>
//             //          <select name="mysettings.general.color-theme" id="profileColor" className="form-control" defaultValue={settings['mysettings.general.color-theme']}>
//             //            <option value="blue">Blue</option>
//             //            <option value="red">Red</option>
//             //            <option value="purple">Purple</option>
//             //            <option value="orange">Orange</option>
//             //          </select>
//             //        </fieldset>
//             //     </SettingsPage>
//             //     <SettingsPage handler="/Profile" options={dynamicOptionsForProfilePage} />
//             //   </SettingsContent>
//             // </SettingsPane>

//             <Wrapper>
//             <h1>Dark Mode example</h1>
//             <div>
//               <button onClick={() => themeState.toggle()}>
//                 {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
//               </button>
//             </div>
//           </Wrapper>
//         )
//     }
// }

// export default Settings;



// import React from "react";
// import styled from "@emotion/styled";
// import { useTheme } from "./ThemeContext";

// const Wrapper = styled("div")`
//   background: ${props => props.theme.background};
//   width: 100vw;
//   height: 100vh;
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
//   h1 {
//     color: ${props => props.theme.body};
//   }
// `;

// const App = () => {
//   const themeState = useTheme();

//   return (
//     <Wrapper>
//       <h1>Dark Mode example</h1>
//       <div>
//         <button onClick={() => themeState.toggle()}>
//           {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
//         </button>
//       </div>
//     </Wrapper>
//   );
// };

// export default App;



import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${props => 
            props.theme.mode === 'dark' ? '#111' : '#EEE'};
        color: ${props => 
            props.theme.mode === 'dark' ? '#EEE' : '#111'};
    }
`;


function Settings(){
    const [theme, setTheme] = useState({mode : 'dark'})
    return (
        <ThemeProvider theme={theme}>
            <>
            <GlobalStyle />
                <div className="Settings">
                    <h1>Hello</h1>
                    <h2>World!</h2>
                    <button 
                        onClick={e =>
                            setTheme(
                                theme.mode === 'dark' 
                                ? {mode : 'light'} 
                                : {mode : 'dark'}
                            )
                        }
                    >
                        Toggle Theme
                    </button>
                </div>
            </>
        </ThemeProvider>
    )
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<Settings />, rootElement);
export default Settings;