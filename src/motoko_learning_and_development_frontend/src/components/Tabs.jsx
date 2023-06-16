import React, { useRef, useState } from 'react';
import motokoImg from "../../assets/images/motoko.jpg"

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [copiedText, setCopiedText] = useState('');
    const [copiedText1, setCopiedText1] = useState('');
    const [copiedText2, setCopiedText2] = useState('');
    const [copiedText3, setCopiedText3] = useState('');
    const inputRef = useRef(null);

    const handleCopy = () => {
        const textToCopy = inputRef.current.value;
        setCopiedText(textToCopy);
        inputRef.current.select();
        document.execCommand('copy');
        setCopiedText1('');
        setCopiedText2('');
        setCopiedText3('');
    };

    const handleCopy1 = () => {
        const textToCopy = inputRef.current.value;
        setCopiedText1(textToCopy);
        inputRef.current.select();
        document.execCommand('copy');
        setCopiedText('');
        setCopiedText2('');
        setCopiedText3('');
    };

    const handleCopy2 = () => {
        const textToCopy = inputRef.current.value;
        setCopiedText2(textToCopy);
        inputRef.current.select();
        document.execCommand('copy');
        setCopiedText('');
        setCopiedText1('');
        setCopiedText3('');
    };

    const handleCopy3 = () => {
        const textToCopy = inputRef.current.value;
        setCopiedText2(textToCopy);
        inputRef.current.select();
        document.execCommand('copy');
        setCopiedText('');
        setCopiedText1('');
        setCopiedText2('');
    };

    const handleClick = (event) => {
        // const tabId = event.currentTarget.id;
        // setActiveTab(tabId);
    };

    return (
        <section className="vertical-tabs-section">
            <div className="container">
                <div className="how_work_flight">
                    <div className="vert-tab">
                        <div className={`recr-content ${activeTab === 'Home' ? 'active' : ''}`} id="Home" onClick={handleClick}>
                            <h3>00. Motoko</h3>
                            <div className="work_items_content">
                                <div className="vert_tab_image_wrrapeer">
                                    <div className="vert-tab-content">
                                        <h2>00.</h2>
                                        <h4>Motoko Introduction</h4>
                                        <p>In this section, we explore the fundamentals of the Motoko language, namely its syntax, core data structures, flow control features, and the type system.If you have some prior programming experience this will hopefully be enough to get you started with Motoko.
                                        </p>
                                    </div>
                                    <img src={motokoImg} alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className={`recr-content ${activeTab === 'Home' ? 'active' : ''}`} id="Comments" onClick={handleClick}>
                            <h3>01. Comments</h3>
                            <div className="work_items_content">
                                <div className="vert_tab_image_wrrapeer">
                                    <img src={motokoImg} alt="Image" />
                                    <div className="vert-tab-content">
                                        <h2>01.</h2>
                                        <h4>Comments</h4>
                                        <p>Motoko allows you to write comments in your code. Here’s a simple comment:
                                        </p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" ref={inputRef} value="// Hello, world!" />
                                                <button className="btn btn-primary" onClick={handleCopy}>Copy</button>
                                            </div>
                                            {copiedText && <p classname="text-success">Copied Sucessfully</p>}
                                        </div>
                                        <p>In Motoko, comments must start with two slashes and continue until the end of the line. For comments that extend beyond a single line, you’ll need to include // on each line, like this:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" ref={inputRef} value="// Hello, world!" />
                                                <button className="btn btn-primary" onClick={handleCopy1}>Copy</button>
                                            </div>
                                            {copiedText1 && <p classname="text-success">Copied Sucessfully</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`recr-content ${activeTab === 'Home' ? 'active' : ''}`} id="Strings" onClick={handleClick}>
                            <h3>02. Strings</h3>
                            <div className="work_items_content">
                                <div className="vert_tab_image_wrrapeer">
                                    <div className="vert-tab-content">
                                        <h2>02.</h2>
                                        <h4>Strings</h4>
                                        <p>
                                            In Motoko strings (type name is Text) can be written as text surrounded by double quotes.
                                        </p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">"Hello, Motoko!" </p>
                                            </div>
                                        </div>
                                        <p>
                                            Under the hood strings are UTF-8 encoded binaries and can contain any valid unicode.
                                        </p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">import Debug "mo:base/Debug";
                                                    Debug.print("👩‍💻 こんにちは Motoko 💫");
                                                </p>
                                            </div>
                                        </div>
                                        <h4>Common methods</h4>
                                        <p>Strings are represented by the class Text that has a few useful methods.<br />You can get the size of the string by calling method size():</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary" ref={inputRef}>let myString : Text = "Hello, Motoko!";<br />
                                                    myString.size()</p>
                                            </div>
                                        </div>
                                        <p>Text.chars() returns an iterator that you can use to loop over the string's characters:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary" ref={inputRef}>import Char "mo:base/Char";<br />
                                                    let myString : Text = "Hello, Motoko!";<br />
                                                    for (char in myString.chars()) &#123;<br />
                                                    Debug.print(Char.toText(char));<br />
                                                    &#125;
                                                </p>
                                            </div>
                                        </div>
                                        <p>String could be compared to each other using == operator:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary" ref={inputRef}>
                                                    import Debug "mo:base/Debug";<br/>
                                                    let A = "A";<br/>
                                                    let B = "B";<br/>
                                                    let X = "A";<br/>
                                                    if (A == B) &#123;<br/>
                                                        Debug.print("A and B are the same!")<br/>
                                                        &#125; else &#123;<br/>
                                                        Debug.print("A and B are different!")<br/>
                                                        &#125;;<br/>
                                                        <br/>
                                                    if (A == X)&#123;<br/>
                                                        Debug.print("A and X are the same!")<br/>
                                                        &#125; else &#123;<br/>
                                                        Debug.print("A and X are different!")<br/>
                                                        &#125;;<br/>
                                                </p>
                                            </div>
                                        </div>
                                        <h4>Converting other types to Text</h4>
                                        <p>
                                            Most of the types can be converted to Text using toText() function from the type's module.
                                        </p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary" ref={inputRef}>import Nat "mo:base/Nat";<br />
                                                    let natVal : Nat = 32;<br />
                                                    Nat.toText(natVal)</p>
                                            </div>
                                        </div>

                                    </div>
                                    <img src={motokoImg} alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className={`recr-content ${activeTab === 'Home' ? 'active' : ''}`} id="Booleans" onClick={handleClick}>
                            <h3>03. Booleans</h3>
                            <div className="work_items_content">
                                <div className="vert_tab_image_wrrapeer">
                                    <img src={motokoImg} alt="Image" />
                                    <div className="vert-tab-content">
                                        <h2>03.</h2>
                                        <h4>Booleans</h4>
                                        <p>
                                        A Bool can be either true or false.<br/>
                                        Motoko defines a handful of operators that work with Bools.
                                        </p>
                                        <h4>Logical operator (and)</h4>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">false and false // =&gt; false</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">false and true  // =&gt; false</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">true and false  // =&gt; false</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">true and true  // =&gt; true</p>
                                            </div>                                            
                                        </div>
                                        <h4>Logical operator (or)</h4>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">false or false // =&gt; false</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">false or true  // =&gt; true</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">true or false  // =&gt; true</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">true or true  // =&gt; true</p>
                                            </div>                                            
                                        </div>
                                        <h4>Logical operator not</h4>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">not true  // =&gt; false</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">not false // =&gt; true</p>
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`recr-content ${activeTab === 'Home' ? 'active' : ''}`} id="Integers" onClick={handleClick}>
                            <h3>04. Integers</h3>
                            <div className="work_items_content">
                                <div className="vert_tab_image_wrrapeer">
                                    <div className="vert-tab-content">
                                        <h2>04.</h2>
                                        <h4>Integers</h4>
                                        <p>Motoko's main number types are Int, Nat and Float.</p>
                                        <h4>Nat</h4>
                                        <p>Nats are "whole" positive numbers. By default positive whole nunbers are casted to type Nat.</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">1 // 1 : Nat</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">2 // 2 : Nat</p>
                                            </div>
                                            <p>Large Nat numbers could be written with underscore as divider:</p>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">123_456_789 // 123_456_789 : Nat</p>
                                            </div>
                                            <p>Even when you write a large number without underscores, Motoko will add them during the print out.</p>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">123456789 // 123_456_789 : Nat</p>
                                            </div>                                            
                                        </div>
                                        <h4>Ints</h4>
                                        <p>Integers represent whole numbers that could be either positive or negative.</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">+3 // 3 : Int</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">-3 // -3 : Int</p>
                                            </div>
                                            <p>Every positive number literal is treated as Nat. However, it doesn't cause a problem in arithmetic operations since Nat is subtype of Int.</p>                                       
                                        </div>
                                        <h4>Arithmetic operations</h4>
                                        <p>Motoko has several operators that work with Nat and Int values.</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">1 + 1 // =&gt; 2 : Nat</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">+2 - 5 // =&gt; -3 : Int</p>
                                            </div>   
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">3 * 3 // =&gt; 9 : Nat  </p>
                                            </div>                                                                               
                                        </div>
                                        <p>Integer division produces integer results:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">5 / 2 // =&gt; 2 : Nat</p>
                                            </div>
                                            <p>% operator performs modular division:</p>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">5 % 2 // =&gt; 1 : Nat</p>
                                            </div>
                                            <p>Integers support comparison:</p>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">2 &gt; 1  // =&gt; true</p>
                                            </div>   
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">2 &lt; 1  // =&gt; false</p>
                                            </div> 
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">2 &gt;= 1  // =&gt; true</p>
                                            </div>                                                                               
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">2 &lt;= 1  // =&gt; false</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <img src={motokoImg} alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className={`recr-content ${activeTab === 'Home' ? 'active' : ''}`} id="Bounded-integers" onClick={handleClick}>
                            <h3>05. Bounded integers</h3>
                            <div className="work_items_content">
                                <div className="vert_tab_image_wrrapeer">
                                    <img src={motokoImg} alt="Image" />
                                    <div className="vert-tab-content">
                                        <h2>05.</h2>
                                        <h4>Bounded integers</h4>
                                        <p>Motoko supports integer types with fixed precision called "Bounded types".<br/>You may want to use bounded types for these reasons:</p>
                                        <ul>
                                            <li><b>Memory efficiency:</b> You want to be sure how much memory your data will occupy</li>
                                            <li><b>Exact sizing:</b> If you know that some API returns exact number</li>
                                            <li><b>Execution efficiency:</b> If you know that your numbers require 64-bit arithmetic, using Nat64 is more efficient than just Nat</li>
                                            <li><b>Bitwise arithmetic:</b> If you want to do bitwise operations like &lt;&lt; or XOR it's much easier when you work with the exact representation of binary data</li>
                                        </ul>                                        
                                        <h4>Nat8, Nat16, Nat32 and Nat64</h4>
                                        <p>Natural types include Nat8, Nat16, Nat32 and Nat64. Bounded types need to be declared manually. Otherwise, numeric literals will default to Int or Nat.<br/>The number that is a part of type name specifies the number of bits in the type representation. For example, Nat32 represents a 32-bit natural number.<br/>Declaring a bounded variable:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">let a : Nat32 = 1 // 1 : Nat32</p>
                                            </div>
                                            <p>To declare a bounded value you have to specify the type explicitly to avoid it resolving to a regular Nat:</p>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">2 : Nat32 // 2: Nat32</p>
                                            </div>                                           
                                        </div>
                                        <h4>Int8, Int16, Int32, and Int64</h4>
                                        <p>Integer types include Int8, Int16, Int32, and Int64. Bounded Int types behave very similarly to Nat types with a difference that they support negative values. The number that is a part of type name specifies the number of bits in the type representation. For example, Int32 represents a 32-bit integer.</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">// A variable of type Int32<br/>let a : Int32 = 1 // +1 : Int32</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">// A literal of type Int32<br/>-2 : Int8 // -2: Int8</p>
                                            </div>                                       
                                        </div>
                                        <h4>Modular arithmetics</h4>
                                        <p>Bounded types support modular arithmetic (+%, -%, *% and **% ) where the number will never go out of bounds.<br/>Example 1: Normal arithmetic operators go out of bounds:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">let a = 255 : Nat8;<br/>let b = 1 : Nat8;<br/>a + b // execution error, arithmetic overflow</p>
                                            </div>
                                            <p>Example 2: Modular arithmetic operators go out of bounds:</p>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">let a = 255 : Nat8;<br/>let b = 1 : Nat8;<br/>a +% b // 0 : Nat8</p>
                                            </div> 
                                            <p>Bounded integers also support modular arithmetic:</p>  
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">let a = 127 : Int8;<br/>let b = 1 : Int8;<br/>a +% b // -128 : Int8</p>
                                            </div>                                                                               
                                        </div>
                                        <h4>Bitwise arithmetics</h4>
                                        <p>Bounded types support bitwise arithmetic</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">// Binary AND "&"<br/>let a = 64 : Nat8; // binary 1000000<br/>let b = 65 : Nat8; // binary 1000001<br/>a & b // 64 : Nat8 == binary 1000000</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">// Binary OR "|"<br/>let a = 64 : Nat8; // binary 1000000<br/>let b = 65 : Nat8; // binary 1000001<br/>a | b // 65 : Nat8 == binary 1000001</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">// Binary XOR "^"<br/>let a = 64 : Nat8; // binary 1000000<br/>let b = 65 : Nat8; // binary 1000001<br/>a ^ b // 1 : Nat8  == binary 0000001</p>
                                            </div>   
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">// Binary shift left "&lt;&lt;"<br/>let a = 64 : Nat8; //    binary  1000000<br/>a &lt;&lt; 1 // 128 : Nat8  == binary 10000000</p>
                                            </div> 
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">// Binary shift right "&gt;&gt;"<br/>let a = 64 : Nat8; //   binary 1000000<br/>a &lt;&lt; 1 // 32 : Nat8  == binary  100000</p>
                                            </div>                                                                               
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">// Binary rotation left "&lt;&lt;&gt;"<br/>let a = 255 : Nat8; //    binary 11111111<br/>a &lt;&lt;&gt;1 // 255 : Nat8  == binary 11111111</p>
                                            </div> 
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">// Binary rotation right "&lt;&gt;&gt;"<br/>let a = 64 : Nat8; //   binary 1000000<br/>a &lt;&gt;&gt;1 // 32 : Nat8 == binary  100000</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`recr-content ${activeTab === 'Home' ? 'active' : ''}`} id="Floats" onClick={handleClick}>
                            <h3>06. Floats</h3>
                            <div className="work_items_content">
                                <div className="vert_tab_image_wrrapeer">
                                    <div className="vert-tab-content">
                                        <h2>06.</h2>
                                        <h4>Floats</h4>
                                        <p>Floats are numbers that have a decimal point.</p>                                     
                                        <h4>Literals</h4>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">1.5 // 1.5 : Float</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">2.0 // 2 : Float</p>
                                            </div>
                                            <p>You can also create Float literals by specifying the type directly:</p>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">2 : Float // 2 : Float</p>
                                            </div> 
                                            <p>Floats are stored in special format that save the data with a certain precision. So, the value of the literal could be different from the input value.</p>       
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">-0.1 // -0.100_000_000_000_000_01 : Float <br/>    // The value is VERY close to -0.1 <br/>   // but NOT exactly the same</p>
                                            </div> 
                                            <p>Underscores can also be added to Floats for clarity.</p>   
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">1_000_000.0 // One million</p>
                                            </div>                                 
                                        </div>
                                        <h4>Operators</h4>
                                        <p>Floats support arithmetic operators.</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">1.0 + 1.4 // =&gt; 2.399_999_999_999_999_9 : Float</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">5.0 - 1.5 // =&gt; 3.5 : Float</p>
                                            </div>                                       
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">5.0 / 2.0 // =&gt; 2.5 : Float</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">3.0 * 3.1 // =&gt; 9.300_000_000_000_000_7 : Float</p>
                                            </div> 
                                            <p>Floats support comparison.</p>  
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">2.0 &gt; 1.0  // =&gt; true</p>
                                            </div>                                                                               
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">2.0 &lt; 1.0  // =&gt; false</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">2.0 &gt;= 1.0 // =&gt; true</p>
                                            </div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">2.0 &lt;= 1.0 // =&gt; false</p>
                                            </div>    
                                        </div>
                                    </div>
                                    <img src={motokoImg} alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className={`recr-content ${activeTab === 'Home' ? 'active' : ''}`} id="Actors" onClick={handleClick}>
                            <h3>07. Actors and async data</h3>
                            <div className="work_items_content">
                                <div className="vert_tab_image_wrrapeer">
                                    <div className="vert-tab-content">
                                        <h2>07.</h2>
                                        <h4>Actors and async data</h4>
                                        <p>The programming model of the Internet Computer consists of memory-isolated canisters communicating by asynchronous message passing of binary data encoding Candid values. A canister processes its messages one-at-a-time, preventing race conditions. A canister uses call-backs to register what needs to be done with the result of any inter-canister messages it issues.<br/><br/>In Motoko, actors have dedicated syntax and types; messaging is handled by so called shared functions returning futures (shared because they are available to remote actors); a future, f, is a value of the special type async T for some type T; waiting on f to be completed is expressed using await f to obtain a value of type T. To avoid introducing shared state through messaging, for example, by sending an object or mutable array, the data that can be transmitted through shared functions is restricted to immutable, shared types.<br/><br/>To start, we consider the simplest stateful service: a Counter actor, the distributed version of our previous, local counter object.</p>
                                        <h4>Example: a Counter service</h4>
                                        <p>Consider the following actor declaration:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">actor Counter &#123;<br/>&nbsp; var count = 0;<br/>&nbsp; public shared func inc() : async () &#123; count += 1 &#125;;<br/> &nbsp;public shared func read() : async Nat &#123; count &#125;;<br/> &nbsp;public shared func bump() : async Nat &#123;<br/> count += 1;<br/> count;<br/> &nbsp;&#125;;<br/>&#125;;<br/></p>
                                            </div>
                                            <p>The Counter actor declares one field and three public, shared functions:</p>
                                            <ul>
                                                <li>the field count is mutable, initialized to zero and implicitly private.</li>
                                                <li>function inc() asynchronously increments the counter and returns a future of type async () for synchronization.</li>
                                                <li>function read() asynchronously reads the counter value and returns a future of type async Nat containing its value.</li>
                                                <li>function bump() asynchronously increments and reads the counter.</li>
                                            </ul> 
                                            <p>Shared functions, unlike local functions, are accessible to remote callers and have additional restrictions: their arguments and return value must be shared types - a subset of types that includes immutable data, actor references, and shared function references, but excludes references to local functions and mutable data. Because all interaction with actors is asynchronous, an actor’s functions must return futures, that is, types of the form async T, for some type T.<br/><br/>The only way to read or modify the state (count) of the Counter actor is through its shared functions.<br/><br/>A value of type async T is a future. The producer of the future completes the future when it returns a result, either a value or error.<br/><br/>Unlike objects and modules, actors can only expose functions, and these functions must be shared. For this reason, Motoko allows you to omit the shared modifier on public actor functions, allowing the more concise, but equivalent, actor declaration:</p>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">actor Counter &#123;<br/>&nbsp; var count = 0;<br/>&nbsp; public func inc() : async () &#123; count += 1 &#125;;<br/> &nbsp;public func read() : async Nat &#123; count &#125;;<br/> &nbsp;public func bump() : async Nat &#123;<br/> count += 1;<br/> count;<br/> &nbsp;&#125;;<br/>&#125;;<br/></p>
                                            </div>  
                                            <p>For now, the only place shared functions can be declared is in the body of an actor or actor class. Despite this restriction, shared functions are still first-class values in Motoko and can be passed as arguments or results, and stored in data structures.</p>                                         
                                        </div>
                                        <h4>Actor types</h4>
                                        <p>Just as objects have object types, actors have actor types. The Counter actor has the following type:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">actor &#123;<br/>inc  : shared () -&gt; async ();<br/>read : shared () -&gt; async Nat;<br/> bump : shared () -&gt; async Nat;<br/>  &#125;</p>
                                            </div>
                                            <p>Again, because the shared modifier is required on every member of an actor, Motoko both elides them on display, and allows you to omit them when authoring an actor type.<br/><br/>Thus the previous type can be expressed more succinctly as:</p> 
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">actor &#123;<br/>inc  : () -&gt; async ();<br/>read : () -&gt; async Nat;<br/> bump : () -&gt; async Nat;<br/>  &#125;</p>
                                            </div>                                    
                                        </div>
                                        <h4>Using await to consume async futures</h4>
                                        <p>The caller of a shared function typically receives a future, a value of type async T for some T.<br/>The only thing the caller, a consumer, can do with this future is wait for it to be completed by the producer, throw it away, or store it for later use.<br/>To access the result of an async value, the receiver of the future use an await expression.<br/>For example, to use the result of Counter.read() above, we can first bind the future to an identifier a, and then await a to retrieve the underlying Nat, n:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">let a : async Nat = Counter.read();<br/>let n : Nat = await a;</p>
                                            </div>
                                            <p>The first line immediately receives a future of the counter value, but does not wait for it, and thus cannot (yet) use it as a natural number.<br/>The second line awaits this future and extracts the result, a natural number. This line may suspend execution until the future has been completed.<br/>Typically, one rolls the two steps into one and one just awaits an asynchronous call directly:</p>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">let n : Nat = await Counter.read();</p>
                                            </div>                                                                              
                                        </div>
                                        {/* <h4>Traps and Commit Points</h4>
                                        <p>A trap is a non-recoverable runtime failure caused by, for example, division-by-zero, out-of-bounds array indexing, numeric overflow, cycle exhaustion or assertion failure.<br/>A shared function call that executes without executing an await expression never suspends and executes atomically. A shared function that contains no await expression is syntactically atomic.<br/>An atomic shared function whose execution traps has no visible effect on the state of the enclosing actor or its environment - any state change is reverted, and any message that it has sent is revoked. In fact, all state changes and message sends are tentative during execution: they are committed only after a successful commit point is reached.<br/>The points at which tentative state changes and message sends are irrevocably committed are:</p>
                                        <ul>
                                            <li>implicit exit from a shared function by producing a result,</li>
                                            <li>explict exit via return or throw expressions, and</li>
                                            <li>explicit await expressions.</li>
                                        </ul>
                                        <p>A trap will only revoke changes made since the last commit point. In particular, in a non-atomic function that does multiple awaits, a trap will only revoke changes attempted since the last await - all preceding effects will have been committed and cannot be undone.<br/>For example, consider the following (contrived) stateful Atomicity actor:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">actor Atomicity &#123; <br/>&nbsp;var s = 0;<br/>&nbsp;var pinged = false;<br/>&nbsp;var pinged = false;<br/>&nbsp;public func ping() : async () &#123; <br/>&nbsp; &nbsp;pinged := true;<br/>
                                                &nbsp;&#125; ;&nbsp;<br/>// an atomic method<br/>&nbsp;public func atomic() : async () &#123; <br/>&nbsp; &nbsp;s := 1;<br/>&nbsp; &nbsp;ignore ping();<br/>
                                                &nbsp; &nbsp;ignore 0/0; // trap!<br/>&nbsp;&#125; ;<br/>&nbsp;// a non-atomic method<br/>&nbsp;public func nonAtomic() : async () &#123; <br/>&nbsp;s := 1;<br/>
                                                &nbsp;let f = ping(); // this will not be rolled back! <br/>&nbsp;s := 2;<br/>&nbsp;await f;<br/>&nbsp;s := 3; // this will not be rolled back!<br/>&nbsp;await f;<br/>&nbsp;ignore 0/0; // trap!<br/>&nbsp;&#125; ;<br/>&#125; ;</p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`recr-content ${activeTab === 'Home' ? 'active' : ''}`} id="Mutable-state" onClick={handleClick}>
                            <h3>08. Mutable state</h3>
                            <div className="work_items_content">
                                <div className="vert_tab_image_wrrapeer">
                                    <div className="vert-tab-content">
                                        <h2>08.</h2>
                                        <h4>Mutable state</h4>
                                        <p>Each actor in Motoko may use, but may never directly share, internal mutable state.<br/>Later, we discuss sharing among actors, where actors send and receive immutable data, and also handles to each others external entry points, which serve as shareable functions. Unlike those cases of shareable data, a key Motoko design invariant is that *mutable data is kept internal (private) to the actor that allocates it, and is never shared remotely*.<br/>In this chapter, we continue using minimal examples to show how to introduce (private) actor state, and use mutation operations to change it over time.<br/>In local objects and classes, we introduce the syntax for local objects, and a minimal counter actor with a single mutable variable. In the following chapter, we show an actor with the same behavior, exposing the counter variable indirectly behind an associated service interface for using it remotely.</p>
                                        <h4>Immutable versus mutable variables</h4>
                                        <p>The var syntax declares mutable variables in a declaration block:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">let text  : Text = "abc";<br/>let num  : Nat = 30;<br/>var pair : (Text, Nat) = (text, num);<br/>var text2 : Text = text;</p>
                                            </div>
                                            <p>The declaration list above declares four variables. The first two variables (text and num) are lexically-scoped, immutable variables. The final two variables (pair and text2) are lexically-scoped, mutable variables.</p>                                         
                                        </div>
                                        <h4>Assignment to mutable memory</h4>
                                        <p>Mutable variables permit assignment, and immutable variables do not.<br/>If we try to assign new values to either text or num above, we will get static type errors; these variables are immutable.<br/>However, we may freely update the value of mutable variables pair and text2 using the syntax for assignment, written as :=, as follows:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">text2 := text2 # "xyz";<br/>pair := (text2, pair.1);<br/>pair</p>
                                            </div>
                                            <p>Above, we update each variable based on applying a simple “update rule” to their current values (for example, we update text2 by appending string constant "xyz" to its suffix). Likewise, an actor processes some calls by performing updates on its internal (private) mutable variables, using the same assignment syntax as above.</p>
                                        </div>
                                        <h4>Special assignment operations</h4>
                                        <p>The assignment operation := is general, and works for all types.<br/>Motoko also includes special assignment operations that combine assignment with a binary operation. The assigned value uses the binary operation on a given operand and the current contents of the assigned variable.<br/>For example, numbers permit a combination of assignment and addition:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">var num2 = 2;<br/>num2 += 40;<br/>num2</p>
                                            </div>
                                            <p>After the second line, the variable num2 holds 42, as one would expect.<br/>Motoko includes other combinations as well. For example, we can rewrite the line above that updates text2 more concisely as:</p>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">text2 #= "xyz";<br/>text2</p>
                                            </div>                                                                              
                                        </div>
                                        <h4>Reading from mutable memory</h4>
                                        <p>When we updated each variable, we also first read from the mutable contents, with no special syntax.<br/>This illustrates a subtle point: Each use of a mutable variable looks like the use of an immutable variable, but does not act like one. In fact, its meaning is more complex. As in many languages (JavaScript, Java, C#, etc.), but not all, the syntax of each use hides the memory effect that accesses the memory cell identified by that variable, and gets its current value. Other languages from functional traditions (SML, OCaml, Haskell, etc), generally expose these effects syntactically.<br/>Below, we explore this point in detail.</p>
                                        <h4>Understanding var- versus let-bound variables</h4>
                                        <p>Consider the following two variable declarations, which look similar:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">let x : Nat = 0</p>
                                            </div>
                                            <p>And</p>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">var x : Nat = 0</p>
                                            </div>                                                                              
                                        </div>
                                        <p>For instance, instead of declaring x as a mutable variable initially holding 0, we could instead use y, an immutable variable that denotes a mutable array with one entry, holding 0:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">var x : Nat       = 0 ;<br/>let y : [var Nat] = [var 0] ;</p>
                                            </div>
                                        </div>
                                        <h4>Immutable arrays</h4>
                                        <p>Before discussing mutable arrays, we introduce immutable arrays, which share the same projection syntax, but do not permit mutable updates (assignments) after allocation.</p>
                                        <h4>Allocate an immutable array of constants</h4>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">let a : [Nat] = [1, 2, 3] ;</p>
                                            </div>
                                        </div>
                                        <p>The array a above holds three natural numbers, and has type [Nat]. In general, the type of an immutable array is [_], using square brackets around the type of the array’s elements, which must share a single common type, in this case Nat.</p>
                                        <h4>Project from (read from) an array index</h4>
                                        <p>We can project from (read from) an array using the usual bracket syntax ([ and ]) around the index we want to access:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">let x : Nat = a[2] + a[0] ;</p>
                                            </div>
                                        </div>
                                        <h4>The Array module</h4>
                                        <p>The Motoko standard library provides basic operations for immutable and mutable arrays. It can be imported as follows,</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">import Array "mo:base/Array";</p>
                                            </div>
                                        </div>
                                        <h4>Mutable arrays</h4>
                                        <p>Above, we introduced immutable arrays, which share the same projection syntax as mutable arrays, but do not permit mutable updates (assignments) after allocation. Unlike immutable arrays, each mutable array in Motoko introduces (private) mutable actor state.<br/>Because Motoko’s type system enforces that remote actors do not share their mutable state, the Motoko type system introduces a firm distinction between mutable and immutable arrays that impacts typing, subtyping and the language abstractions for asynchronous communication.</p>
                                        <h4>Allocate a mutable array of constants</h4>
                                        <p>To indicate allocation of mutable arrays (in contrast to the forms above, for immutable ones), the mutable array syntax [var _] uses the var keyword, in both the expression and type forms:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">let a : [var Nat] = [var 1, 2, 3] ;</p>
                                            </div>
                                        </div>
                                        <p>As above, the array a above holds three natural numbers, but has type [var Nat].</p>
                                        <h4>Allocate a mutable array with dynamic size</h4>
                                        <p>To allocate mutable arrays of non-constant size, use the Array_init primitive, and supply an initial value:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">func init&lt;T&gt;(size : Nat,  x : T) : [var T]</p>
                                            </div>
                                            <p>For example:</p>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">var size : Nat = 42 ;<br/>let x : [var Nat] = Array.init&lt;Nat&generalt;(size, 3);</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`recr-content ${activeTab === 'Home' ? 'active' : ''}`} id="Imperative_control_flow" onClick={handleClick}>
                            <h3>09. Imperative control flow</h3>
                            <div className="work_items_content">
                                <div className="vert_tab_image_wrrapeer">
                                    <div className="vert-tab-content">
                                        <h2>09.</h2>
                                        <h4>Imperative control flow</h4>
                                        <p>There are two key categories of control flow:</p>
                                        <ul>
                                            <li>declarative, when the structure of some value guides control and the selection of the next expression to evaluate, like in if and switch expressions;</li>
                                            <li>imperative where control changes abruptly according to a programmer’s command, abondoning regular control flow; examples are break and continue, but also return and throw.</li>
                                        </ul>
                                        <p>Imperative control flow often goes hand-in-hand with state changes and other flavors of side-effects, such as error handling and input/output.</p>
                                        <h4>Early return from func</h4>
                                        <p>Normally, the result of a function is the value of its body. Sometimes, during evaluation of the body, the result is available before the end of evaluation. In such situations the return &lt;exp&gt; construct can be used to abandon the rest of the computation and immediately exit the function with a result. Similarly, where permitted, throw may be used to abandon a computation with an error.<br/>When a function has unit result type, the shorthand return may be used instead of the equivalent return ().</p>
                                        <h4>Loops and labels</h4>
                                        <p>Motoko provides several kinds of repetition constructs, including:</p>
                                        <ul>
                                            <li><b>for</b> expressions for iterating over members of structured data.</li>
                                            <li><b>loop</b> expressions for programmatic repetition (optionally with termination condition).</li>
                                            <li><b>while</b> loops for programmatic repetition with entry condition.</li>

                                        </ul>
                                        <p>Any of these can be prefixed with a label &lt;name&gt; qualifier to give the loop a symbolic name. Named loops are useful for imperatively changing control flow to continue from the entry or exit of the named loop.</p>
                                        <ul>
                                            <li>re-entering the loop with continue &lt;name&gt;, or</li>
                                            <li>exiting the loop altogether with break &lt;name&gt;.</li>
                                        </ul>
                                        <p>In the following example, the for expression loops over characters of some text and abandons iteration as soon as an exclamation sign is encountered.</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">import Debug "mo:base/Debug";<br/>label letters for (c in "ran!!dom".chars()) &#123;<br/>Debug.print(debug_show(c));<br/> if (c == '!') &#123; break letters &#125;;<br/>  // ...<br/>  &#125;</p>
                                            </div>                                      
                                        </div>
                                        <h4>Labeled expressions</h4>
                                        <p>There are two other facets to label​s that are less mainstream, but come in handy in certain situations:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">import Text "mo:base/Text";<br/>import Iter "mo:base/Iter";<br/> type Host = Text;<br/>let formInput = "us@dfn";<br/> let address = label exit : ?(Text, Host) &#123;<br/>  let splitted = Text.split(formInput, #char '@');<br/> let array = Iter.toArray&lt;Text&gt;(splitted);<br/>  if (array.size() != 2) &#123; break exit(null) &#125;;<br/>  let account = array[0];<br/>  let host = array[1];<br/>  // if (not (parseHost(host))) &#123; break exit(null) &#125;;<br/>  ?(account, host)<br/>  &#125;</p>
                                            </div>
                                        </div>
                                        <h4>Repetition with loop</h4>
                                        <p>The simplest way to indefinitely repeat a sequence of imperative expressions is by using a loop construct</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">loop &#123; &lt;expr1&gt;; &lt;expr2&gt;; ... &#125;</p>
                                            </div>
                                            <p>The loop can only be abandoned with a return or break construct.<br/>A re-entry condition can be affixed to allow a conditional repetition of the loop with loop &lt;body&gt; while &lt;cond&gt;.<br/>The body of such a loop is always executed at least once.</p>                                                                            
                                        </div>
                                        <h4>while loops with precondition</h4>
                                        <p>Sometimes an entry condition is needed to guard the first execution of a loop. For this kind of repetition the while &lt;cond&gt; &lt;body&gt;-flavor is available</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">while (earned &lt; need) &#123; earned += earn() &#125;;</p>
                                            </div>                                                                            
                                        </div>
                                        <p>Unlike a loop, the body of a while loop may never be executed.</p>
                                        <h4>for loops for iteration</h4>
                                        <p>An iteration over elements of some homogeneous collection can be performed using a for loop. The values are drawn from an iterator and bound to the loop pattern in turn.</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">let carsInStock = &lbrack;&nbsp;  ("Buick", 2020, 23.000),&nbsp;("Toyota", 2019, 17.500),&nbsp;("Audi", 2020, 34.900)&rbrack;;<br/>var inventory : &#123; var value : Float &#125; = &#123; var value = 0.0 &#125;;<br/>for ((model, year, price) in carsInStock.vals()) &#123;<br/>&nbsp;&nbsp; inventory.value += price;<br/>&#125;;<br/>inventory</p>
                                            </div>
                                        </div>
                                        <h4>Using range with a for loop</h4>
                                        <p>The range function produces an iterator (of type Iter&lt;Nat&gt;) with the given lower and upper bound, inclusive.<br/>The following loop example prints the numbers 0 through 10 over its eleven iterations:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">import Iter "mo:base/Iter";<br/>import Debug "mo:base/Debug";<br/>var i = 0;<br/>for (j in Iter.range(0, 10)) &#123;<br/>&nbsp;&nbsp;Debug.print(debug_show(j));<br/>&nbsp;&nbsp;assert(j == i);<br/>&nbsp;&nbsp;i += 1;<br/>&#125;;<br/>assert(i == 11);</p>
                                            </div>
                                        </div>
                                        <p>The array a above holds three natural numbers, and has type [Nat]. In general, the type of an immutable array is [_], using square brackets around the type of the array’s elements, which must share a single common type, in this case Nat.</p>
                                        <h4>Project from (read from) an array index</h4>
                                        <p>We can project from (read from) an array using the usual bracket syntax ([ and ]) around the index we want to access:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">let x : Nat = a[2] + a[0] ;</p>
                                            </div>
                                        </div>
                                        <h4>The Array module</h4>
                                        <p>The Motoko standard library provides basic operations for immutable and mutable arrays. It can be imported as follows,</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">import Array "mo:base/Array";</p>
                                            </div>
                                        </div>
                                        <h4>Mutable arrays</h4>
                                        <p>Above, we introduced immutable arrays, which share the same projection syntax as mutable arrays, but do not permit mutable updates (assignments) after allocation. Unlike immutable arrays, each mutable array in Motoko introduces (private) mutable actor state.<br/>Because Motoko’s type system enforces that remote actors do not share their mutable state, the Motoko type system introduces a firm distinction between mutable and immutable arrays that impacts typing, subtyping and the language abstractions for asynchronous communication.</p>
                                        <h4>Allocate a mutable array of constants</h4>
                                        <p>To indicate allocation of mutable arrays (in contrast to the forms above, for immutable ones), the mutable array syntax [var _] uses the var keyword, in both the expression and type forms:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">let a : [var Nat] = [var 1, 2, 3] ;</p>
                                            </div>
                                        </div>
                                        <p>As above, the array a above holds three natural numbers, but has type [var Nat].</p>
                                        <h4>Allocate a mutable array with dynamic size</h4>
                                        <p>To allocate mutable arrays of non-constant size, use the Array_init primitive, and supply an initial value:</p>
                                        <div>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">func init&lt;T&gt;(size : Nat,  x : T) : [var T]</p>
                                            </div>
                                            <p>For example:</p>
                                            <div className="input-group mb-3">
                                                <p className="form-control bg-body-secondary">var size : Nat = 42 ;<br/>let x : [var Nat] = Array.init&lt;Nat&generalt;(size, 3);</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tabs;
