import React from "react";

const ElementsPage = () => (
    <>
        <h1>All Elements</h1>
        <h2>Headings</h2>
        <p>
            The HTML <code>{"<h1>"}</code>-<code>{"<h6>"}</code> elements
            represent six levels of section headings. <code>{"<h1>"}</code> is
            the highest section level and <code>{"<h6>"}</code> is the lowest.
        </p>
        <h2>Heading Level 2</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut id
            adipisci veniam eius, cupiditate ullam!
        </p>
        <h3>Heading Level 3</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut id
            adipisci veniam eius, cupiditate ullam!
        </p>
        <h4>Heading Level 4</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut id
            adipisci veniam eius, cupiditate ullam!
        </p>

        <h2>Inline Elements</h2>

        <p>
            The HTML Mark Text element (<code>{"mark"}</code>) represents text
            which is <mark>marked</mark> or <mark>highlighted</mark> for
            reference or notation purposes, due to the marked passage's
            relevance or importance in the enclosing context.
        </p>

        <p>
            The HTML Strong Importance Element (<code>{"<strong>"}</code>)
            indicates that its contents have <strong>strong importance</strong>,{" "}
            <strong>seriousness</strong>, or <strong>urgency</strong>. Browsers
            typically render the contents in bold type.
        </p>

        <p>
            The HTML <code>{"<em>"}</code> element marks text that has{" "}
            <em>stress emphasis</em>. The <code>{"<em>"}</code> element can be
            nested, with each level of nesting indicating a greater degree of
            emphasis.
        </p>

        <p>
            The HTML <code>{"<del>"}</code> element represents a range of text
            that has been <del>deleted from a document</del>. This can be used
            when rendering "track changes" or source code diff information, for
            example.
        </p>

        <p>
            The HTML <code>{"<ins>"}</code> element represents a range of text
            that has been <ins>added to a document</ins>.
        </p>

        <p>
            The HTML <code>{"<a>"}</code> element (or anchor element), with its
            href attribute, creates a{" "}
            <a
                href="https://developer.mozilla.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                hyperlink to web pages
            </a>
            , files, email addresses, locations in the same page, or anything
            else a URL can address. Content within each <code>{"<a>"}</code>{" "}
            should indicate the link's destination.
        </p>

        <p>
            The HTML <code>{"<code>"}</code> element displays its contents
            styled in a fashion intended to indicate that the text is a{" "}
            <code>short fragment of computer code</code>. By default, the
            content text is displayed using the user agent's default monospace
            font.
        </p>

        <p>
            The HTML Keyboard Input element (<code>{"<kbd>"}</code>) represents
            a span of inline text denoting textual user input from a keyboard,
            voice input, or any other text entry device. Press{" "}
            <kbd>
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z" />
                </svg>
            </kbd>{" "}
            + <kbd>Shift</kbd> + <kbd>R</kbd> to reload this page.
        </p>

        <h2>List Elements</h2>

        <h3>Unordered List</h3>

        <p>
            The HTML <code>{"<ul>"}</code> element represents an unordered list
            of items, typically rendered as a bulleted list.
        </p>

        <ul>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Adipisicing elit Quisquam quo ipsum at.</li>
            <li>Debitis nulla, atque incidunt voluptatem similique.</li>
            <li>Deleniti impedit id adipisci repellat maiores.</li>
        </ul>

        <h3>Ordered List</h3>

        <p>
            The HTML <code>{"<ol>"}</code> element represents an ordered list of
            items &#x2014; typically rendered as a numbered list.
        </p>

        <ol>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Adipisicing elit Quisquam quo ipsum at.</li>
            <li>Debitis nulla, atque incidunt voluptatem similique.</li>
            <li>Deleniti impedit id adipisci repellat maiores.</li>
        </ol>

        <h3>Definition List</h3>

        <p>
            The HTML <code>{"<dl>"}</code> element represents a description
            list. The element encloses a list of groups of terms (specified
            using the <code>{"<dt>"}</code> element) and descriptions (provided
            by <code>{"<dd>"}</code> elements). Common uses for this element are
            to implement a glossary or to display metadata (a list of key-value
            pairs).
        </p>

        <dl>
            <dt>HTML</dt>
            <dd>
                Hypertext Markup Language (HTML) is the standard markup language
                for documents designed to be displayed in a web browser.
            </dd>
            <dt>CSS</dt>
            <dd>
                Cascading Style Sheets (CSS) is a style sheet language used for
                describing the presentation of a document written in a markup
                language such as HTML.
            </dd>
            <dt>JavaScript</dt>
            <dd>
                JavaScript, often abbreviated as JS, is a programming language
                that conforms to the ECMAScript specification. JavaScript is
                high-level, often just-in-time compiled, and multi-paradigm. It
                has curly-bracket syntax, dynamic typing, prototype-based
                object-orientation, and first-class functions.
            </dd>
        </dl>

        <h2>Foreign Content Elements</h2>

        <h3>Images</h3>

        <p>
            The HTML <code>{"<img>"}</code> element embeds an image into the
            document.
        </p>

        <img
            src="https://images.unsplash.com/photo-1574156563831-5acee22092f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1812&q=80"
            alt="A house that is painted with clouds"
        />

        <p>
            The HTML <code>{"<figure>"}</code> (Figure With Optional Caption)
            element represents self-contained content, potentially with an
            optional caption, which is specified using the{" "}
            <code>{"<figcaption>"}</code> element. The figure, its caption, and
            its contents are referenced as a single unit.
        </p>

        <figure>
            <img
                src="https://images.unsplash.com/photo-1602697990684-d3e0ef78c4d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt="Coffee beans"
            />
            <figcaption>
                Dolorem inventore aspernatur repellendus. Magni quisquam quod,
                aliquam fugiat cupiditate adipisci quasi.
            </figcaption>
        </figure>

        <h3>Videos</h3>

        <p>
            The HTML Video element (<code>{"<video>"}</code>) embeds a media
            player which supports video playback into the document. You can use{" "}
            <code>{"<video>"}</code> for audio content as well, but the{" "}
            <code>{"<audio>"}</code> element may provide a more appropriate user
            experience.
        </p>

        <video
            controls
            muted
            src="https://www.pexels.com/video/3115672/download/?search_query=&tracking_id=j4e17hdbtw&w=1280&h=720"
        ></video>

        <p>
            The HTML <code>{"<figure>"}</code> (Figure With Optional Caption)
            element represents self-contained content, potentially with an
            optional caption, which is specified using the{" "}
            <code>{"<figcaption>"}</code> element. The figure, its caption, and
            its contents are referenced as a single unit.
        </p>

        <figure>
            <video
                controls
                muted
                src="https://www.pexels.com/video/3115672/download/?search_query=&tracking_id=j4e17hdbtw&w=1280&h=720"
            ></video>
            <figcaption>
                Dolorem inventore aspernatur repellendus. Magni quisquam quod,
                aliquam fugiat cupiditate adipisci quasi.
            </figcaption>
        </figure>

        <h3>Embedded Content</h3>

        <p>
            The HTML Inline Frame element (<code>{"<iframe>"}</code>) represents
            a nested browsing context, embedding another HTML page into the
            current one.
        </p>

        <iframe
            src="https://codesandbox.io/embed/framer-motion-keyframes-ekks8?fontsize=14&hidenavigation=1&theme=dark"
            title="Framer Motion: Keyframes"
        ></iframe>

        <p>
            The HTML <code>{"<figure>"}</code> (Figure With Optional Caption)
            element represents self-contained content, potentially with an
            optional caption, which is specified using the{" "}
            <code>{"<figcaption>"}</code> element. The figure, its caption, and
            its contents are referenced as a single unit.
        </p>

        <figure>
            <iframe
                src="https://codesandbox.io/embed/framer-motion-keyframes-ekks8?fontsize=14&hidenavigation=1&theme=dark"
                title="Framer Motion: Keyframes"
            ></iframe>
            <figcaption>
                Dolorem inventore aspernatur repellendus. Magni quisquam quod,
                aliquam fugiat cupiditate adipisci quasi.
            </figcaption>
        </figure>

        <h3>Audio</h3>

        <p>
            The HTML <code>{"<audio>"}</code> element is used to embed sound
            content in documents. It may contain one or more audio sources,
            represented using the src attribute or the <code>{"<source>"}</code>{" "}
            element: the browser will choose the most suitable one. It can also
            be the destination for streamed media, using a MediaStream.
        </p>

        <audio
            controls
            src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Yung_Kartz/June_2019/Yung_Kartz_-_07_-_Straight_Shot.mp3"
        ></audio>

        <p>
            The HTML <code>{"<figure>"}</code> (Figure With Optional Caption)
            element represents self-contained content, potentially with an
            optional caption, which is specified using the{" "}
            <code>{"<figcaption>"}</code> element. The figure, its caption, and
            its contents are referenced as a single unit.
        </p>

        <figure>
            <audio
                controls
                src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Yung_Kartz/June_2019/Yung_Kartz_-_07_-_Straight_Shot.mp3"
            ></audio>
            <figcaption>
                Dolorem inventore aspernatur repellendus. Magni quisquam quod,
                aliquam fugiat cupiditate adipisci quasi.
            </figcaption>
        </figure>

        <h2>Other Block Elements</h2>

        <h3>Quotes</h3>

        <p>
            The HTML <code>{"<blockquote>"}</code> Element (or HTML Block
            Quotation Element) indicates that the enclosed text is an extended
            quotation. Usually, this is rendered visually by indentation. A URL
            for the source of the quotation may be given using the cite
            attribute, while a text representation of the source can be given
            using the <code>{"<cite>"}</code> element.
        </p>

        <blockquote cite="https://www.brainyquote.com/quotes/elon_musk_567211">
            "People work better when they know what the goal is and why. It is
            important that people look forward to coming to work in the morning
            and enjoy working."
            <br />
            <br />
            <cite>– Elon Musk</cite>
        </blockquote>

        <h3>Preformatted Content</h3>

        <p>
            The HTML <code>{"<pre>"}</code> element represents preformatted text
            which is to be presented exactly as written in the HTML file. The
            text is typically rendered using a non-proportional ("monospace")
            font. Whitespace inside this element is displayed as written.
        </p>

        <pre>
            <code className="language-html">
                {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>
</head>
<body>
</body>
</html>`}
            </code>
        </pre>

        <h3>Dividers</h3>

        <p>
            The HTML <code>{"<hr>"}</code> element represents a thematic break
            between paragraph-level elements: for example, a change of scene in
            a story, or a shift of topic within a section.
        </p>

        <hr />

        <p>
            Historically, this has been presented as a horizontal rule or line.
            While it may still be displayed as a horizontal rule in visual
            browsers, this element is now defined in semantic terms, rather than
            presentational terms, so if you wish to draw a horizontal line, you
            should do so using appropriate CSS.
        </p>

        <h3>Interactive Elements</h3>

        <p>
            The HTML Details Element (<code>{"<details>"}</code>) creates a
            disclosure widget in which information is visible only when the
            widget is toggled into an "open" state. A summary or label can be
            provided using the <code>{"<summary>"}</code> element.
        </p>

        <details>
            <summary>What rock group has four men that don't sing?</summary>
            Mount Rushmore.
        </details>
        <details>
            <summary>What concert costs just 45 cents?</summary>
            50 Cent featuring Nickelback!
        </details>
        <details>
            <summary>
                What do you call a mac 'n' cheese that gets all up in your face?
            </summary>
            Too close for comfort food!
        </details>
        <details>
            <summary>Why couldn't the bicycle stand up by itself?</summary>
            It was two tired!
        </details>

        <h3>Progress Bar</h3>

        <p>
            The HTML <code>{"<progress>"}</code> element displays an indicator
            showing the completion progress of a task, typically displayed as a
            progress bar.
        </p>

        <progress max="100" value="70">
            70%
        </progress>
        <progress>70%</progress>

        <h2>Tables</h2>

        <p>
            The HTML <code>{"<table>"}</code> element represents tabular data
            &#x2014; that is, information presented in a two-dimensional table
            comprised of rows and columns of cells containing data.
        </p>

        <table>
            <caption>Ho-kago Tea Time</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Instrument</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Yui Hirasawa</td>
                    <td>Lead Guitar</td>
                </tr>
                <tr>
                    <td>Mio Akiyama</td>
                    <td>Bass</td>
                </tr>
                <tr>
                    <td>Ritsu Tainaka</td>
                    <td>Drums</td>
                </tr>
                <tr>
                    <td>Tsumugi Kotobuki</td>
                    <td>Keyboard</td>
                </tr>
                <tr>
                    <td>Azusa Nakano</td>
                    <td>Rhythm Guitar</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Name</th>
                    <th>Instrument</th>
                </tr>
            </tfoot>
        </table>

        <hr />

        <h2>Form Elements</h2>

        <p>
            The HTML <code>{"<form>"}</code> element represents a document
            section containing interactive controls for submitting information.
        </p>

        <form>
            <fieldset>
                <legend>Personal Information</legend>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur aliquid nemo ipsa quo ex delectus ab inventore
                    excepturi blanditiis sapiente.
                </p>
                <label>
                    First name
                    <input
                        type="text"
                        name="first_name"
                        placeholder="e.g. John"
                    />
                </label>
                <label>
                    Last name
                    <input
                        type="text"
                        name="last_name"
                        placeholder="e.g. Doe"
                    />
                </label>
                <label>Gender</label>
                <div>
                    <label>
                        <input type="radio" name="gender" value="Male" />
                        Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Female" />
                        Female
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="other-none-na"
                        />
                        Non-binary
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Contact Information</legend>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores rerum laudantium reprehenderit, aliquid dolores
                    culpa!
                </p>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        required=""
                        placeholder="e.g. john.doe@example.com"
                    />
                </label>
                <label>
                    Country
                    <select>
                        <option>Germany</option>
                        <option>China</option>
                        <option>India</option>
                        <option>United States</option>
                        <option>Indonesia</option>
                        <option>Brazil</option>
                    </select>
                </label>
                <label>
                    Phone number
                    <input
                        type="tel"
                        name="phone"
                        placeholder="e.g. +49 1234 5678901"
                    />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        placeholder="••••••••"
                    />
                </label>
                <label>
                    Comments
                    <textarea placeholder="What do you think?"></textarea>
                </label>
                <label>
                    <input type="checkbox" value="terms" />I agree to the{" "}
                    <a href="#">terms and conditions</a>
                </label>
            </fieldset>
            <p>
                <button>Sign up</button>
                <button type="reset">Reset form</button>
                <button disabled="disabled">Disabled</button>
            </p>
        </form>
    </>
);

export default ElementsPage;
