import Link from "next/link";

import * as React from "react";

function Arrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="5em"
      height="5em"
      className="hover:animate-pulse duration-1000 fill-slate-900 dark:fill-slate-50 stroke-1"
      viewBox="0 0 20 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.97 52.6c.745.542 1.385.994 2.01 1.476 2.175 1.717 3.292 3.946 3.203 6.777-.09 2.951-.774 5.738-1.966 8.418a4.776 4.776 0 00-.373 1.1c-.03.135.135.391.284.466.149.076.446.076.55-.015.492-.497.924-1.039 1.386-1.55 1.132-1.266 2.22-2.576 3.396-3.78.745-.754 1.52-.754 2.1-.182.536.528.596 1.085.104 1.898-.402.678-.893 1.325-1.37 1.973-.775 1.039-1.609 2.033-2.368 3.102-.76 1.054-1.49 2.154-1.4 3.554.014.196-.03.407-.075.587-.238.964-.774 1.491-1.579 1.567-.834.075-1.594-.302-1.817-1.22-.834-3.584-3.62-5.362-6.375-7.154-.908-.587-1.951-.978-2.89-1.566a6.135 6.135 0 01-1.534-1.385c-.595-.753-.089-1.898.864-2.078 1.013-.196 1.981.015 2.875.497 1.653.888 3.292 1.807 5.094 2.8.923-1.084 1.013-2.53 1.31-3.81.314-1.34.358-2.77.373-4.171 0-1.28-.7-2.274-1.683-3.057a10.885 10.885 0 00-1.743-1.145c-1.698-.888-2.457-2.695-1.638-4.593.67-1.551 1.296-3.132 2.01-4.668.582-1.265 1.326-2.47 1.892-3.735 1.117-2.5.909-4.85-.849-7.033-1.25-1.551-2.547-3.087-3.62-4.774-2.606-4.081-2.397-8.765.418-12.665.462-.648 1.057-1.22 1.445-1.913.685-1.204 1.444-2.424 1.876-3.735 1.445-4.352-.52-8.358-4.751-9.924-.655-.24-1.355-.361-1.981-.647-.298-.136-.58-.558-.626-.889-.074-.572.373-.903.88-1.009 1.206-.256 2.382-.075 3.5.377 3.738 1.49 5.928 4.246 6.464 8.282.432 3.238-.551 6.145-2.294 8.825-.551.829-1.192 1.597-1.787 2.41-2.264 3.072-2.354 6.43-.209 9.488a53.68 53.68 0 003.128 4.02c2.785 3.253 3.083 6.837 1.475 10.663-.581 1.385-1.37 2.665-2.056 4.005-.655 1.31-1.46 2.59-1.653 4.413z"
        // fill="#0F172A"
      />
    </svg>
  );
}

const Contact = ({ calltoaction }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-8">
      <h3 className="text-2xl md:text-4xl py-16">
        {calltoaction.smalltitle || "Contact me"}{" "}
      </h3>
      <Arrow />
      <Link
        legacyBehavior
        href={calltoaction.url || `mailto:${process.env.NEXT_EMAIL}`}
      >
        <a className="pt-8 text-xl underline underline-offset-2 decoration-slate-900 dark:decoration-slate-50 hover:no-underline pb-24 ease-in-out">
          {calltoaction.buttontext}{" "}
        </a>
      </Link>
    </div>
  );
};

export default Contact;
