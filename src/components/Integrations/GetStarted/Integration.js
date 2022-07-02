import React from "react";
import { ReactComponent as BlueCopy } from "../../../assets/svgs/blue-copy.svg";
import { ReactComponent as ChevronBlueRight } from "../../../assets/svgs/chevron-blue-right.svg";
import "./styles.css";
const Integration = () => {
  const clients = ["Web", "iOS", "Android", "React Native", "Flutter"];
  const code = `
  <!-- Place this before the </body> tag -->
<script
  type="text/javascript"
  src="https://unpkg.com/@rattify/button"
></script>
<!-- Place the code below where you want your button to appear -->
<div id="rattify-button"></div>
<script type="text/javascript">
  Rattify.renderButton(
    document.getElementById("rattify-button"),
    "Ga7qtz1Qma26KKspVNxdZLZNu4XbYzmxWKZ49aYR4T9cymBLRWZCwKUw4QxBLuv3",
    {
      onStart: () => {},
      onError: (errorCode) => {},
      onFinish: (identityAccessKey) => {},
    }
  );
</script>`;
  return (
    <div className="mt-10">
      <h3 className="font-semibold mt-5">
        Choose your favorite client-side integration
      </h3>
      <div className="flex justify-evenly  mt-3">
        {clients.map((ele, i) => {
          return (
            <span
              key={i}
              className="p-2 bg-white shadow-clientShadow rounded cursor-pointer"
            >
              {ele}
            </span>
          );
        })}
      </div>
      <p className="mt-5 text-sm"></p>
      <div className="bg-white shadow-clientShadow relative p-6 pt-8 mt-5">
        <span
          className="absolute right-10 p-2 text-primary font-medium flex items-center w-fit bg-white shadow-companyShadow rounded cursor-pointer"
        >
          <BlueCopy className="mr-2"/>
          Code
        </span>
        <code>
          <span className="comment">
            {`<!-- Place this before the </body> tag -->`}
          </span>
          <span className="tag">{`<script`} </span>
          <span className="code-content">{`type="text/javascript"`}</span>
          <span className="code-content">{`src="https://unpkg.com/@rattify/button"`}</span>
          <span className="tag">{`></script>`} </span>
          <span className="comment">
            {`<!-- Place the code below where you want your button to appear -->`}
          </span>
          <div className="flex">
            <span className="tag mr-2">{`<div`}</span>
            <span className="code-content">{` id="rattify-button"`}</span>
            <span className="tag">{`>`} </span>
            <span className="tag">{`</div>`} </span>
          </div>
          <div className="flex">
            <span className="tag mr-2">{`<script`} </span>
            <span className="code-content">{`type="text/javascript"`}</span>
            <span className="tag">{`>`} </span>
          </div>
          <div className="flex">
            <span className="tag">{`Rattify`} </span>
            <span className="code-content">{`.renderButton(`}</span>
          </div>
          <div className="flex">
            <span className="tag">{`document`} </span>
            <span className="code-content">{`.getElementById("rattify-button"),`}</span>
          </div>
          <span className="code-content mt-3">{`"Ga7qtz1Qma26KKspVNxdZLZNu4XbYzmxWKZ49aYR4T9cymBLRWZCwKUw4QxBLuv3",`}</span>
          <span className="code-content ml-5">{`{`}</span>
          <span className="code-content ml-10">{`onStart: () => {},`}</span>
          <div className="flex ml-10">
            <span className="code-content">{`onError: (`}</span>
            <span className="tag">{`errorCode`} </span>
            <span className="code-content">{`) => {},`}</span>
          </div>
          <div className="flex ml-10">
            <span className="code-content">{`onFinish: (`}</span>
            <span className="tag">{`identityAccessKey`} </span>
            <span className="code-content">{`) => {},`}</span>
          </div>
          <span className="code-content ml-5">{`}`}</span>
          <span className="code-content ml-1">{`);`}</span>
          <span className="tag">{`</script>`} </span>
        </code>
      </div>
      <p className="mt-8 text-sm text-primary flex  items-center cursor-pointer">
        See Documentation
        <ChevronBlueRight className="ml-3" />
      </p>
    </div>
  );
};

export default Integration;
