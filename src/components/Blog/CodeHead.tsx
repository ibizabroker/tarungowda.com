import Angularjs from '@/icons/angularjs.svg';
import Css from '@/icons/css.svg';
import Docker from '@/icons/docker.svg';
import Git from '@/icons/git.svg';
import Html from '@/icons/html.svg';
import Javascript from '@/icons/javascript.svg';
import Markdown from '@/icons/markdown.svg'
import Nextjs from '@/icons/nextjs.svg';
import Python from '@/icons/python.svg';
import ReactNative from '@/icons/react-native.svg';
import Reactjs from '@/icons/reactjs.svg';
import Tailwind from '@/icons/tailwind.svg';
import Terminal from '@/icons/terminal.svg';
import Typescript from '@/icons/typescript.svg';

export default function CodeHead({ name, lang }:{ name: any, lang: any }) {
  const outputLanguageString = (value: any) => {
    switch (value) {
      case "angular": {
        return {
          name: "Angular.js",
          icon: <Angularjs />,
        };
      }
      case "css": {
        return {
          name: "CSS",
          icon: <Css />,
        };
      }
      case "docker": {
        return {
          name: "Docker",
          icon: <Docker />,
        };
      }
      case "git": {
        return {
          name: "Git",
          icon: <Git />,
        };
      }
      case "html": {
        return {
          name: "HTML",
          icon: <Html />,
        };
      }
      case "js": {
        return {
          name: "Javascript",
          icon: <Javascript />,
        };
      }
      case "mdx": {
        return {
          name: "MDX",
          icon: <Markdown />,
        };
      }
      case "next": {
        return {
          name: "Next.js",
          icon: <Nextjs />,
        };
      }
      case "python": {
        return {
          name: "Python",
          icon: <Python />,
        };
      }
      case "react-native": {
        return {
          name: "React Native",
          icon: <ReactNative />,
        };
      }
      case "react": {
        return {
          name: "React.js",
          icon: <Reactjs />,
        };
      }
      case "tailwind": {
        return {
          name: "TailwindCSS",
          icon: <Tailwind />,
        };
      }
      case "terminal": {
        return {
          name: "Terminal",
          icon: <Terminal />,
        };
      }
      case "ts": {
        return {
          name: "Typescript",
          icon: <Typescript />,
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