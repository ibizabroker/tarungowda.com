import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoCss3,
  IoLogoSass,
  IoLogoMarkdown,
  IoTerminal,
  IoTerminalOutline,
} from "react-icons/io5";

export default function CodeHead({ name, lang }:{ name: any, lang: any }) {
  const outputLanguageString = (value: any) => {
    switch (value) {
      case "html": {
        return {
          name: "HTML",
          icon: <IoLogoHtml5 />,
        };
      }
      case "css": {
        return {
          name: "CSS",
          icon: <IoLogoCss3 />,
        };
      }
      case "scss": {
        return {
          name: "Sass",
          icon: <IoLogoSass />,
        };
      }
      case "js": {
        return {
          name: "JavaScript",
          icon: <IoLogoJavascript />,
        };
      }
      case "jsx": {
        return {
          name: "JSX",
          icon: <IoLogoReact />,
        };
      }
      case "ts": {
        return {
          name: "TypeScript",
          icon: <IoLogoJavascript />,
        };
      }
      case "tsx": {
        return {
          name: "TSX",
          icon: <IoLogoReact />,
        };
      }
      case "md": {
        return {
          name: "Markdown",
          icon: <IoLogoMarkdown />,
        };
      }
      case "mdx": {
        return {
          name: "MDX",
          icon: <IoLogoMarkdown />,
        };
      }
      case "console": {
        return {
          name: "console",
          icon: <IoTerminalOutline />,
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