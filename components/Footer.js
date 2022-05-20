import React from "react";

const Content = ({ title, value }) => (
  <div className="space-y-4 text-xs text-gray-800">
    <h5 className="font-bold">{title}</h5>
    {value.map((item) => (
      <p key={item}>{item}</p>
    ))}
  </div>
);

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <Content
        title="ABOUT"
        value={[
          "How Airbnb works",
          "Newsroom",
          "Investors",
          "Airbnb Plus",
          "Airbnb Luxe",
        ]}
      />
      <Content
        title="COMMUNITY"
        value={[
          "Accessibility",
          "This is not a real site",
          "Its a pretty awesome clone",
          "Referrals accepted",
          "Papafam",
        ]}
      />
      <Content
        title="HOST"
        value={[
          "Papa React",
          "Presents",
          "Zero to Full Stack hero",
          "Hundreds of Students",
          "Join Now",
        ]}
      />
      <Content
        title="SUPPORT"
        value={[
          "Help Center",
          "Trust & Safety",
          "Say Hi YouTube",
          "Easter Eggs",
          "For the Win",
        ]}
      />
    </div>
  );
};

export default Footer;
