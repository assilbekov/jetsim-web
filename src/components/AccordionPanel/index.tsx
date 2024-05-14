import Image from "next/image";
import "./accordion-panel.css";

type AccordionPanelProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  index: number;
};

export const AccordionPanel = ({
  title,
  children,
  index,
}: AccordionPanelProps) => {
  const panelToggle = () => {
    const panel = document.getElementById(`accordion-panel-${index}`);
    const panelContent = panel?.querySelector(".accordion-content");
    const chevron = panel?.querySelector("img");
    const isPanelOpen = panelContent?.getAttribute("aria-hidden") === "false";

    panelContent?.setAttribute("aria-hidden", String(isPanelOpen));
    panelContent?.setAttribute("aria-expanded", String(!isPanelOpen));
    chevron?.setAttribute("aria-expanded", String(!isPanelOpen));
  };
  const panelTitleId = `panel-${index}-title`;

  return (
    <div
      className="accordion-panel p-8 bg-[#F8F9FB] rounded-xl"
      id={`accordion-panel-${index}`}
      onClick={panelToggle}
    >
      <div id={panelTitleId} className="flex gap-4 cursor-pointer">
        <h3 className="w-full text-xl leading-[26px] font-medium">{title}</h3>
        <Image
          src="/chevron-up.svg"
          alt="chevron up"
          width={24}
          height={24}
          aria-expanded="false"
          className="chevron"
        />
      </div>
      <div
        className="accordion-content"
        role="region"
        aria-labelledby={panelTitleId}
        aria-hidden="true"
        id={`panel-${index}-content`}
      >
        <div>
          <p className="pt-4 pr-10 font-medium text-base leading-[22px] text-text-600">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};
