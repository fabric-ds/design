export default function Index() {
  return (
    <div className="grid lg:grid-cols-3 gap-16">
      <div className="lg:col-span-2">
        <h2>What is Fabric?</h2>
        <p>
          Fabric is the cloth that binds us all together, the foundation of
          everything we build upon, a culture of communication, collaboration
          and quality. It’s our effort to streamline our design and development
          process, with a focus on:
        </p>
        <ul>
          <li>
            Improving the quality and consistency of visual design in FINN
          </li>
          <li>
            Creating clearer, more structured design guidelines and
            documentation
          </li>
          <li>Making it all available in one place</li>
          <li>Refining our components libraries</li>
          <li>
            Controlling what should and shouldn't be added to the design system
          </li>
          <li>
            Creating a more collaborative environment for designers and
            developers
          </li>
        </ul>
        <h3 className="mb-20">FINN tech community</h3>
        <p className="font-bold">FINN blog - Product, Design and Tech</p>
        <p>
          Check out our{' '}
          <a
            className="underline"
            href="https://medium.com/finn-no"
            target="_blank"
          >
            FINN.no blog on Medium
          </a>{' '}
          written by FINN.no designers and developers. Our blog is the place
          where we show what's powering our service along with useful insights
          into how to solve common problems.
        </p>
        <p className="font-bold">FINN UX instagram</p>
        <p>
          Follow{' '}
          <a
            className="underline"
            href="https://www.instagram.com/finnuxdesign"
            target="_blank"
          >
            FINN UX on instagram
          </a>{' '}
          to get a glimpse of what it’s like to work as a designer in FINN, and
          how much we value a culture of fun, engagement, and professional
          development.
        </p>
        <div className="flex shadow" style={{ borderRadius: 5 }}>
          <div
            className="bg-aqua-400 flex items-center px-12"
            style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
          >
            <svg
              width="92"
              height="32"
              viewBox="0 0 92 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.252 2.08789H3.02281C2.50962 2.08789 2.09222 2.50462 2.09222 3.01676V28.9835C2.09222 29.4957 2.50962 29.9124 3.02281 29.9124H29.9738V20.7712C29.9738 10.4692 21.5753 2.08789 11.252 2.08789Z"
                fill="#0063FB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M88.9772 2.08789H32.9965C32.4833 2.08789 32.0657 2.50462 32.0657 3.01676V29.9122H88.9772C89.4904 29.9122 89.9079 29.4957 89.9079 28.9835V3.01676C89.9079 2.50462 89.4904 2.08789 88.9772 2.08789Z"
                fill="#06BEFB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.09214 28.9835V3.01672C2.09214 2.50457 2.50973 2.08785 3.02292 2.08785H11.2519C21.5752 2.08785 29.9737 10.4691 29.9737 20.7712V29.9122H3.02292C2.50973 29.9122 2.09214 29.4956 2.09214 28.9835ZM89.9079 28.9835C89.9079 29.4956 89.4903 29.9122 88.9771 29.9122H32.0658V3.01672C32.0658 2.50457 32.4834 2.08785 32.9966 2.08785H88.9771C89.4903 2.08785 89.9079 2.50457 89.9079 3.01672V28.9835ZM88.9771 0H32.9966C31.3297 0 29.9737 1.35326 29.9737 3.01672V11.7009C26.5933 4.78019 19.4719 0 11.2519 0H3.02292C1.35604 0 0 1.35326 0 3.01672V28.9835C0 30.6467 1.35604 32 3.02292 32H88.9771C90.644 32 92 30.6467 92 28.9835V3.01672C92 1.35326 90.644 0 88.9771 0Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41.5072 10.5752H49.0454C49.373 10.5752 49.6385 10.8402 49.6385 11.167V13.0232C49.6385 13.3501 49.373 13.6151 49.0454 13.6151H44.2116V16.0641H48.0603C48.3879 16.0641 48.6534 16.3291 48.6534 16.656V18.2363C48.6534 18.5631 48.3879 18.8281 48.0603 18.8281H44.2116V20.8336C44.2116 21.1604 43.9461 21.4252 43.6186 21.4252H41.5072C41.1797 21.4252 40.9142 21.1604 40.9142 20.8336V11.167C40.9142 10.8402 41.1797 10.5752 41.5072 10.5752ZM52.9221 10.5752H55.0335C55.361 10.5752 55.6265 10.8402 55.6265 11.167V20.8336C55.6265 21.1604 55.361 21.4254 55.0335 21.4254H52.9221C52.5946 21.4254 52.3291 21.1604 52.3291 20.8336V11.167C52.3291 10.8402 52.5946 10.5752 52.9221 10.5752ZM80.4666 10.5752H78.355C78.0277 10.5752 77.7622 10.8402 77.7622 11.167V15.907L74.4607 10.9287C74.3142 10.708 74.0665 10.5752 73.8012 10.5752H72.1792C71.8517 10.5752 71.5862 10.8402 71.5862 11.167V20.8336C71.5862 21.1604 71.8517 21.4252 72.1792 21.4252H74.2908C74.6183 21.4252 74.8836 21.1604 74.8836 20.8336V16.1484L78.1129 21.0685C78.259 21.2911 78.5077 21.4252 78.7744 21.4252H80.4666C80.7941 21.4252 81.0596 21.1604 81.0596 20.8336V11.167C81.0596 10.8402 80.7941 10.5752 80.4666 10.5752ZM65.6385 10.5752H67.7501C68.0776 10.5752 68.3431 10.8402 68.3431 11.167V20.8336C68.3431 21.1604 68.0776 21.4252 67.7501 21.4252H66.0578C65.7912 21.4252 65.5425 21.2911 65.3964 21.0685L62.1671 16.1484V20.8336C62.1671 21.1604 61.9016 21.4252 61.5742 21.4252H59.4627C59.1352 21.4252 58.8696 21.1604 58.8696 20.8336V11.167C58.8696 10.8402 59.1352 10.5752 59.4627 10.5752H61.0847C61.35 10.5752 61.5977 10.708 61.7441 10.9287L65.0455 15.907V11.167C65.0455 10.8402 65.311 10.5752 65.6385 10.5752Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="pl-20">
            <h4 className="pt-16">Join us?</h4>
            <p className="pb-12 pr-4">
              Check out our{' '}
              <a
                className="underline"
                href="https://www.finn.no/jobbeifinn/jobb-i-finn"
                target="_blank"
              >
                current job openings
              </a>{' '}
              and come join our friendly team of skilled designers and
              developers.
            </p>
          </div>
        </div>
      </div>
      <div>
        <f-docs-highlight-box></f-docs-highlight-box>
        {/* <div className="bg-gray-100 rounded-8 p-24 mb-24 block sm:grid sm:grid-cols-2 gap-x-16 lg:block">
      <h3 className="col-span-2 h4 mb-16">Implementations</h3>
      <a
        href="https://css.fabric-ds.io/"
        className="bg-white border mb-16 rounded-4 flex lg:flex items-center align-middle no-underline hover:no-underline text-gray-800"
      >
        <div className="w-48 h-48 p-8 border-r flex"></div>
        <div className="px-16">Fabric CSS</div>
      </a>
      <a
        href="https://elements.fabric-ds.io/"
        className="bg-white border mb-16 rounded-4 flex items-center align-middle no-underline hover:no-underline text-gray-800"
      >
        <div className="w-48 h-48 p-8 border-r flex"></div>
        <div className="px-16">Fabric Elements</div>
      </a>
      <a
        href="https://react.fabric-ds.io/"
        className="bg-white border mb-16 rounded-4 flex items-center align-middle no-underline hover:no-underline text-gray-800"
      >
        <div className="w-48 h-48 p-8 border-r flex"></div>
        <div className="px-16">Fabric React</div>
      </a>
      <a
        href="https://vue.fabric-ds.io/"
        className="bg-white border mb-16 rounded-4 flex items-center align-middle no-underline hover:no-underline text-gray-800"
      >
        <div className="w-48 h-48 p-8 border-r flex"></div>
        <div className="px-16">Fabric Vue</div>
      </a>
    </div> */}
      </div>
    </div>
  );
}
