import React from "react";
import { Row } from "react-bootstrap";

import {
    WideLeftColumn,
    RightColumn,
    SingleColumn
} from "../components/Columns";
import { Codepen } from "../components/Misc";

const Declarations = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    One of the biggest sources of bugs and confusion in
                    JavaScript has been variable scoping. Without{" "}
                    <code>var</code> everything was global, with{" "}
                    <code>var</code> it was better but still weird. ES6 brings
                    us <code>let</code> and <code>const</code> with proper{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scoping"
                        target="_blank"
                    >
                        lexical scoping
                    </a>, which makes it easier to understand where a variable
                    is and isn't defined.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="qNYoxO" title="Variable Declarations - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="XKqExA" title="Variable Declarations - ES6" />
            <p>
                Constants follow the same scoping rules, but their value cannot
                be reassigned. <code>const</code> protects you against
                accidentally changing variables. It's good to use it for
                everything by default.
            </p>
            <Codepen id="NArYoL" title="Variable Declarations - ES6, const" />
            <p>
                Careful, though. Constants are tricky with arrays and objects.
                The <i>reference</i> becomes constant, but the value does not.
            </p>
            <Codepen id="WxJzWY" title="Variable Declarations - ES6, const2" />
        </RightColumn>
        <Row>
            <SingleColumn>
                <p>
                    One of my favorite features present in most modern
                    JavaScript codebases is omitting repetitive object keys. I
                    don't think this is quite in the standard yet, but it works
                    in most React-based codebases via{" "}
                    <a href="https://babeljs.io/">Babel</a>. I include it
                    because it's commonly used in the wild.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="bYRmgw" title="Repetitive keys - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="Xzgxjq" title="Avoid repeating keys - ES6" />
        </RightColumn>
    </Row>
);

const PayWallDeclarations = ({ bought }) => {
    if (bought) {
        return <Declarations />;
    } else {
        return (
            <div className="App-buy-wrapper">
                <div className="container">
                    <Declarations />
                </div>
                <div className="App-buy-overlay">
                    <a className="gumroad-button" href="https://gum.co/kOCPh">
                        <strong style={{ color: "black" }}>I want this!</strong>
                    </a>
                    <br />
                    <em>Pay what you want</em>
                    <p>
                        The whole cheatsheet ($0+) and free updates for life.<br />
                        Over 4,100 sold
                    </p>
                    <p>
                        <small>
                            If you got this cheatsheet in the past, <br />click
                            the link in your email to unlock.
                        </small>
                    </p>
                </div>
            </div>
        );
    }
};

const Strings = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    String templates are one of my favorite ES6 features.
                    They're amazing! They make it easy to put variables into
                    strings, which often comes handy. Just wrap something in
                    backticks <code>`</code> and you can insert any JavaScript
                    code with <code>{"${...}"}</code>. Just don't get carried
                    away.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="ZOodXw" title="No string templates - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="QEAXOA" title="String templates - ES6" />
        </RightColumn>
        <Row>
            <SingleColumn>
                <p>
                    In ES2017 we got string padding. I personally don't use it,
                    but if you remember the{" "}
                    <a href="http://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm">
                        leftpad controversy
                    </a>{" "}
                    ... well, it seems a lot of people needed this 😅
                </p>
                <p>
                    You can use <code>padStart</code> to insert padding at the
                    start of your string and <code>padEnd</code> to insert them
                    at the end. We use <code>start</code> and <code>end</code>{" "}
                    to support languages with different reading directions.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="pdeOpw" title="String Padding - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="yPMxKz" title="String Padding - ES6" />
        </RightColumn>
    </Row>
);

const Spread = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    You can think of the spread operator, <code>...</code> as a
                    part of destructuring. It's a convenient way to get
                    "everything else that remains" from an Array. The object
                    spread operatoro is also a great alternative to{" "}
                    <code>Object.assign</code> or <code>_.extend</code> when
                    making objects.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen
                id="ZOoqZa"
                title="Sort of spread opeartor - ES5"
                height={400}
            />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="jawvdr" title="Spread Operator - ES6" height={400} />
        </RightColumn>
        <Row>
            <SingleColumn>
                <p>
                    Object spread is still a stage 3 proposal, but looks like a
                    sure bet to make it into the standard soon. Many browsers
                    support it and it works by default in most React-based
                    codebases via Babel. I include it here because it's commonly
                    used in the wild.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="gXmdgY" title="Object assign - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="WXpgow" title="Spread Operator Obj Assign - ES6" />
        </RightColumn>
    </Row>
);

const Destructuring = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    Destructuring is another magnificent feature. It gives you a
                    convenient syntax to extract values from objects and arrays.
                    Using it feels kind of like drawing the shape of your
                    object, and JavaScript filling-in the blanks.{" "}
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="JKvmRB" title="Variable Destructuring - ES5" />
            <Codepen id="akGgNx" title="Object Destructuring - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="GqdYNV" title="Array Destructuring - ES6" />
            <Codepen id="VjxEPg" title="Object Destructuring - ES6" />
        </RightColumn>
    </Row>
);

const ArrowFunctions = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    Now this, this is the workhorse of modern JavaScript! The
                    trusty arrow function. The thing that got everyone so
                    excited when ES6 first started shaping up.
                </p>
                <p>
                    So what's the deal? <code>this</code> has historically been
                    one of the trickiest parts of using JavaScript. Because of{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Scope_(computer_science)#Dynamic_scoping"
                        target="_blank"
                    >
                        dynamic scoping
                    </a>{" "}
                    you could never quite tell what <code>this</code> would
                    point to in a function. It points to "current scope", which
                    is different than the scope in which you defined your
                    function. To many (most?) this is confusing.
                </p>
                <p>
                    Several more or less elegant ways emerged to deal with the
                    confusion. Using <code>.bind()</code> is perhaps the best
                    approach. But with arrow functions, you don't need any of
                    that. An arrow function is always bound to the scope it's
                    defined in. That means you can pass it around and its{" "}
                    <code>this</code> variable will always point the same.
                </p>
                <p>
                    Arrow functions also use cleaner syntax, which makes them
                    nicer to use as iterators. Which just so happens to be the
                    most common reason you need binding.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="AXaGXY" title="Function Definitions - ES5" />
            <Codepen id="OXkZbm" title="This binding - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="yJjdrx" title="Fat arrow functions - ES6" />
            <Codepen id="RRyzpG" title="Lexical this - ES6" />
        </RightColumn>
    </Row>
);

const FunctionParameters = () => (
    <Row>
        <Row>
            <SingleColumn>
                <a name="function-params" />
                <p>
                    Function parameters in ES6 are sort of a special case of
                    destructuring. All that icky stuff we used to do to achieve
                    named params, default params, and optional params? No need.
                    ES6 has you covered.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="dXZBdr" title="Schleppy default params - ES5" />
            <p>
                <br />
                <br />
            </p>
            <Codepen id="pbVXLx" title="Schleppy rest params - ES5" />
            <p>
                A common pattern for named params has been to pass around an
                object. If you can't remember which keys a function expects,
                tough.<br />
            </p>
            <Codepen id="BzxgVJ" title="Schleppy named params - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="OXkZvx" title="Default params - ES6" />
            <p>
                The spread operator in params is especially useful when you need
                something like <code>(a, b, ...everythingElse)</code>.
            </p>
            <Codepen id="zBjVjg" title="Rest params - ES6" />
            <p>
                Behind the scenes, named params are just an object that's passed
                around. You can keep your old function calls, and just change
                the functions.
            </p>
            <Codepen id="dXZBjX" title="Named params - ES6" />
        </RightColumn>
    </Row>
);

const Classes = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    I am personally both a fan of classes <i>and</i> think they
                    were the wrong step for JavaScript to take. Yes, they make
                    object oriented programming (OOP) a whole lot nicer, which
                    is good, but they also encourage it. I like to use objects
                    as bags-of-methods, and avoid traditional OOP architectures.
                </p>
                <p>
                    That said, classes <i>are</i> useful and ES6 syntax sugar{" "}
                    <i>does</i> make them much easier to use. The biggest
                    improvement is to class inheritance.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="EyLBzj" title="Classes - ES5" />
            <p>
                Class inheritance in ES5 is particularly painful. Calling parent
                methods involves dynamic scoping shenanigans with{" "}
                <code>.call</code>, and you have to be careful when defining
                your constructor.
            </p>
            <Codepen id="OXkZKk" title="Inheritance - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="qNYZEq" title="Classes - ES6" />
            <p>
                ES6 improves class inheritance with <code>extends</code>. And{" "}
                <code>super</code> lets you refer to the parent object at any
                time. Please don't get carried away with class hierarchies.
            </p>
            <Codepen id="WxJVbL" title="Inheritance - ES6" />
        </RightColumn>
    </Row>
);

const GettersSetters = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    Getters and setters are one of those{" "}
                    <i>"Whoa that's cool ... what do I do with it?"</i>. They
                    let you make methods pretend to be class properties. Or to
                    wrap properties in functions, if you prefer.
                </p>
                <p>
                    There's nothing like it in ES5, but similar features do
                    exist in other languages.
                </p>
                <p>
                    <b>The concept goes like this:</b> you define an object
                    property that is actually a function, or a pair of
                    functions. With getters, it's a neat way to manipulate data
                    when it's accessed. With setters, it's a neat way to
                    validate data when it's set.
                </p>
                <p>
                    You <i>could</i> just use functions directly, but this is a
                    nice abstraction. <a href="https://mobx.js.org/">MobX</a>,
                    for example, uses this to implement its state management
                    machinery.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn />
        <RightColumn>
            <Codepen id="AXaZWj" title="Getters/Setters - ES6" height={507} />
        </RightColumn>
    </Row>
);

const Modules = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    ES6 gave us a native way to organize our code into modules:{" "}
                    <code>import</code> and <code>export</code>. It's a cleaner
                    and more feature-full way of doing <code>require()</code>,
                    which was never part of the official spec anyway.
                </p>
                <p>
                    What I like about modules, is that you can explicitly define{" "}
                    <i>what</i> you're taking out of a file. Look at the top of
                    the file and you know exactly what it uses. No more fishing
                    around to find actual use cases.
                </p>
                <p>
                    Another nice feature is that you can give your own names to
                    imported things. This is especially useful when semantic
                    meaning of a function or class differs between modules. It
                    happens more than you'd think.
                </p>
                <p>
                    These code samples don't work in CodePen, so you'll have to
                    take my word for it.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="zBjgBA" title="require() - ES5" height={407} />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="rLvXrN" title="modules - ES6" height={407} />
        </RightColumn>
    </Row>
);

const DataStructures = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    JavaScript finally got real hashmaps and sets. No longer
                    will we have to rely on pretending that objects are hashes,
                    and, well, sets didn't even exist. So yeah ...
                </p>
                <p>
                    Both give you some nice ways to interact with your data, are
                    generally more robust against weird things happening (I'm
                    looking at you object values that become functions by
                    accident), and are almost never used in real code. Not that
                    I've seen at least.
                </p>
                <p>
                    Sets aren't that handy in most frontend web development, and
                    the terser syntax of "objects as hashes" means most people
                    keep using them. But these are good features that made many
                    people excited so here we are. :)
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="akGZJB" title="hash - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="dXZxRV" title="Hash - ES6" />
            <Codepen id="wWjVpO" title="Set - ES6" />
        </RightColumn>
    </Row>
);

const ArrayFunctions = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    ES2016 added the much needed <code>includes</code> function
                    to arrays. That's not a big update, so I thought I'd show
                    you some helpful Array functions you might not have known
                    existed. Some have been there for a while. All have become
                    more useful with the addition of arrow functions.
                </p>
                <p>
                    I often see people reach for Lodash or similar when they
                    need these primitivies, but there's no need. Unless you have
                    huge performance needs on the scale of millions of
                    operations per second.
                </p>
            </SingleColumn>
            <WideLeftColumn />
            <RightColumn>
                <Codepen
                    id="jamxey"
                    title="Helpful array functions - ES5/6"
                    height={500}
                />
            </RightColumn>
        </Row>
    </Row>
);

const Promises = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    Promises are ES6's answer to callback hell. That's when you
                    have too many nested anonymous callbacks and can't tell
                    what's going on anymore. Promises fix that by giving your
                    callbacks some structure.
                </p>
                <p>
                    You can think of them as monads, if you like. An object that
                    holds the future, but doesn't have it yet. You can access
                    that future by calling <code>.then</code> on a Promise. The
                    important thing to keep in mind is that everything you{" "}
                    <code>return</code> from a promises, is automatically
                    wrapped in a promise.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen
                id="qVmYNo"
                title="Code with callbacks - ES5"
                height={500}
            />
        </WideLeftColumn>
        <RightColumn>
            <Codepen
                id="yPbjMV"
                title="Code with promises - ES6"
                height={500}
            />
        </RightColumn>
        <Row>
            <SingleColumn>
                <p>
                    Where Promises really shine is error handling and ensuring
                    all promises in a set are resolved before doing stuff. For
                    error handling you can use the combination of{" "}
                    <code>reject</code> and <code>.catch</code>, for ensuring
                    completion of all promises, you use <code>.all</code>.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen
                id="zPZMBq"
                title="Code ensuring all callbacks return - ES5"
                height={500}
            />
        </WideLeftColumn>
        <RightColumn>
            <Codepen
                id="KymRPp"
                title="Code ensuring all promises resolve - ES6"
                height={500}
            />
        </RightColumn>
    </Row>
);

const AsyncAwait = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    Async/await is ES2017's answer to Promises hell. I think.
                    Not sure anyone was complaining about Promises hell, but
                    async/await is a nicer way to use Promises. The so called
                    "synchronous way".
                </p>
                <p>
                    You can tag functions as <code>async</code> and use them as
                    if they were normal functions. To access their future value,
                    you use <code>await</code>. Similar concepts to Promises,
                    but fewer parentheses. Once more you can think of
                    async/await as monads, if that helps.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen
                id="zPwjzP"
                title="Code with callbacks - ES5"
                height={400}
            />
        </WideLeftColumn>
        <RightColumn>
            <Codepen
                id="vWmRpp"
                title="Async/Await code - ES2017"
                height={400}
            />
        </RightColumn>
        <Row>
            <SingleColumn>
                <p>
                    When it comes to error handling async/await puts us back in
                    the era of throw/catch. Some people like that, some don't,
                    but it's not much different than using <code>.catch</code>.
                </p>
                <p>
                    It doesn't add much to ensuring a set of <code>async</code>{" "}
                    functions finishes. You still have to use{" "}
                    <code>Promise.all</code> for that.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen
                id="zPZMBq"
                title="Code ensuring all callbacks return - ES5"
                height={500}
            />
        </WideLeftColumn>
        <RightColumn>
            <Codepen
                id="KymRPp"
                title="Code ensuring all asyncs resolve - ES2017"
                height={500}
            />
        </RightColumn>
    </Row>
);

export const Toc = [
    ["declarations", "Variable Declarations", PayWallDeclarations],
    ["strings", "String Templates and Padding", Strings],
    ["destructuring", "Destructuring", Destructuring],
    ["spread-operator", "Spread Operator", Spread],
    ["arrow-functions", "Arrow Functions", ArrowFunctions],
    ["function-params", "Function Parameters", FunctionParameters],
    ["classes", "Classes", Classes],
    ["getters-setters", "Getters/Setters", GettersSetters],
    ["modules", "Modules", Modules],
    ["data-structures", "Data Structures", DataStructures],
    ["array-functions", "Helpful array functions", ArrayFunctions],
    ["promises", "Promises", Promises],
    ["async-await", "Async/Await", AsyncAwait]
];
