import { 
  AngularIcon, 
  CSSIcon, 
  DockerIcon, 
  GitIcon, 
  HTMLIcon, 
  JavaScriptIcon, 
  JsonIcon, 
  MarkdownIcon, 
  NextJSIcon, 
  PythonIcon, 
  ReactIcon, 
  ReactNativeIcon, 
  TailwindIcon, 
  TerminalIcon, 
  TypeScriptIcon 
} from "../Icons";

export default function CodeHead({ name, lang }:{ name: any, lang: any }) {
  const outputLanguageString = (value: any) => {
    switch (value) {
      case "angular": {
        return {
          name: "Angular.js",
          icon: <AngularIcon />,
        };
      }
      case "css": {
        return {
          name: "CSS",
          icon: <CSSIcon />,
        };
      }
      case "docker": {
        return {
          name: "Docker",
          icon: <DockerIcon />,
        };
      }
      case "git": {
        return {
          name: "Git",
          icon: <GitIcon />,
        };
      }
      case "html": {
        return {
          name: "HTML",
          icon: <HTMLIcon />,
        };
      }
      case "js": {
        return {
          name: "Javascript",
          icon: <JavaScriptIcon />,
        };
      }
      case "json": {
        return {
          name: "Json",
          icon: <JsonIcon />,
        };
      }
      case "mdx": {
        return {
          name: "MDX",
          icon: <MarkdownIcon />,
        };
      }
      case "next": {
        return {
          name: "Next.js",
          icon: <NextJSIcon />,
        };
      }
      case "python": {
        return {
          name: "Python",
          icon: <PythonIcon />,
        };
      }
      case "react-native": {
        return {
          name: "React Native",
          icon: <ReactNativeIcon />,
        };
      }
      case "react": {
        return {
          name: "React.js",
          icon: <ReactIcon />,
        };
      }
      case "tailwind": {
        return {
          name: "TailwindCSS",
          icon: <TailwindIcon />,
        };
      }
      case "terminal": {
        return {
          name: "Terminal",
          icon: <TerminalIcon />,
        };
      }
      case "ts": {
        return {
          name: "Typescript",
          icon: <TypeScriptIcon />,
        };
      }
      default:
        break;
    }
  };

  const langData = outputLanguageString(lang);

  return (
    <div className='code-head'>
      <div className='code-head-dots'>
        <span></span>
      </div>

      <div className='code-head-text-wrap'>
        {name && <span className='code-head-name'>{name}</span>}
        <div className='code-head-lang-wrap'>
          <div className='code-head-icon' data-lang={lang}>
            {langData?.icon}
          </div>
          <span className='code-head-lang'>{langData?.name}</span>
        </div>
      </div>
    </div>
  );
}