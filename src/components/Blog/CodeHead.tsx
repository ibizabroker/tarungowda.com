import Angularjs from '@/images/angularjs.svg';
import Css from '@/images/css.svg';
import Docker from '@/images/docker.svg';
import Git from '@/images/git.svg';
import Html from '@/images/html.svg';
import Javascript from '@/images/javascript.svg';
import Markdown from '@/images/markdown.svg'
import Nextjs from '@/images/nextjs.svg';
import Python from '@/images/python.svg';
import ReactNative from '@/images/react-native.svg';
import Reactjs from '@/images/reactjs.svg';
import Tailwind from '@/images/tailwind.svg';
import Terminal from '@/images/terminal.svg';
import Typescript from '@/images/typescript.svg';

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