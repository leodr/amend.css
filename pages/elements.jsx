import React from "react";

export default function ElementsPage() {
    return (
        <>
            <h2>Headings</h2>
            <p>
                The HTML
                <code>&lt;h1&gt;</code>&#x2013;<code>&lt;h6&gt;</code>elements
                represent six levels of section headings.
                <code>&lt;h1&gt;</code> is the highest section level and
                <code>&lt;h6&gt;</code> is the lowest.
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
                The HTML Mark Text element (<code>&lt;mark&gt;</code>)
                represents text which is <mark>marked</mark> or
                <mark>highlighted</mark> for reference or notation purposes, due
                to the marked passage's relevance or importance in the enclosing
                context.
            </p>

            <p>
                The HTML Strong Importance Element (<code>&lt;strong&gt;</code>)
                indicates that its contents have
                <strong>strong importance</strong>,<strong>seriousness</strong>,
                or <strong>urgency</strong>. Browsers typically render the
                contents in bold type.
            </p>

            <p>
                The HTML <code>&lt;em&gt;</code> element marks text that has
                <em>stress emphasis</em>. The <code>&lt;em&gt;</code> element
                can be nested, with each level of nesting indicating a greater
                degree of emphasis.
            </p>

            <p>
                The HTML <code>&lt;del&gt;</code> element represents a range of
                text that has been <del>deleted from a document</del>. This can
                be used when rendering &quot;track changes&quot; or source code
                diff information, for example.
            </p>

            <p>
                The HTML <code>&lt;ins&gt;</code> element represents a range of
                text that has been <ins>added to a document</ins>.
            </p>

            <p>
                The HTML <code>&lt;a&gt;</code> element (or anchor element),
                with its href attribute, creates a
                <a
                    href="https://developer.mozilla.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    hyperlink to web pages
                </a>
                , files, email addresses, locations in the same page, or
                anything else a URL can address. Content within each
                <code>&lt;a&gt;</code> should indicate the link's destination.
            </p>

            <p>
                The HTML <code>&lt;code&gt;</code> element displays its contents
                styled in a fashion intended to indicate that the text is a
                <code>short fragment of computer code</code>. By default, the
                content text is displayed using the user agent's default
                monospace font.
            </p>

            <p>
                The HTML Keyboard Input element (<code>&lt;kbd&gt;</code>)
                represents a span of inline text denoting textual user input
                from a keyboard, voice input, or any other text entry device.
                Press
                <kbd>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z" />
                    </svg>
                </kbd>
                + <kbd>Shift</kbd> + <kbd>R</kbd> to reload this page.
            </p>

            <h2>List Elements</h2>

            <h3>Unordered List</h3>

            <p>
                The HTML <code>&lt;ul&gt;</code> element represents an unordered
                list of items, typically rendered as a bulleted list.
            </p>

            <ul>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Adipisicing elit Quisquam quo ipsum at.</li>
                <li>Debitis nulla, atque incidunt voluptatem similique.</li>
                <li>Deleniti impedit id adipisci repellat maiores.</li>
            </ul>

            <h3>Ordered List</h3>

            <p>
                The HTML <code>&lt;ol&gt;</code> element represents an ordered
                list of items &#x2014; typically rendered as a numbered list.
            </p>

            <ol>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Adipisicing elit Quisquam quo ipsum at.</li>
                <li>Debitis nulla, atque incidunt voluptatem similique.</li>
                <li>Deleniti impedit id adipisci repellat maiores.</li>
            </ol>

            <h3>Definition List</h3>

            <p>
                The HTML <code>&lt;dl&gt;</code> element represents a
                description list. The element encloses a list of groups of terms
                (specified using the <code>&lt;dt&gt;</code> element) and
                descriptions (provided by <code>&lt;dd&gt;</code>
                elements). Common uses for this element are to implement a
                glossary or to display metadata (a list of key-value pairs).
            </p>

            <dl>
                <dt>HTML</dt>
                <dd>
                    Hypertext Markup Language (HTML) is the standard markup
                    language for documents designed to be displayed in a web
                    browser.
                </dd>
                <dt>CSS</dt>
                <dd>
                    Cascading Style Sheets (CSS) is a style sheet language used
                    for describing the presentation of a document written in a
                    markup language such as HTML.
                </dd>
                <dt>Tailwind</dt>
                <dd>
                    A wind blowing in the direction of travel of a vehicle or
                    aircraft; a wind blowing from behind.
                </dd>
            </dl>

            <h2>Foreign Content Elements</h2>

            <h3>Images</h3>

            <p>
                The HTML <code>&lt;img&gt;</code> element embeds an image into
                the document.
            </p>

            <img
                src="https://images.unsplash.com/photo-1574156563831-5acee22092f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1812&q=80"
                alt="A house that is painted with clouds"
            />

            <p>
                The HTML <code>&lt;figure&gt;</code> (Figure With Optional
                Caption) element represents self-contained content, potentially
                with an optional caption, which is specified using the
                <code>&lt;figcaption&gt;</code> element. The figure, its
                caption, and its contents are referenced as a single unit.
            </p>

            <figure>
                <img
                    src="https://images.unsplash.com/photo-1602697990684-d3e0ef78c4d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="Coffee beans"
                />
                <figcaption>
                    Dolorem inventore aspernatur repellendus. Magni quisquam
                    quod, aliquam fugiat cupiditate adipisci quasi.
                </figcaption>
            </figure>

            <h3>Videos</h3>

            <p>
                The HTML Video element (<code>&lt;video&gt;</code>) embeds a
                media player which supports video playback into the document.
                You can use
                <code>&lt;video&gt</code>; for audio content as well, but the
                <code>&lt;audio&gt</code>; element may provide a more
                appropriate user experience.
            </p>

            <video
                controls
                muted
                src="https://vod-progressive.akamaized.net/exp=1602938246~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F535%2F16%2F402679728%2F1721261846.mp4~hmac=e215fd696feba5e72690daf8b2e759885db9a16a8a9780f6f5eeba5596fcc162/vimeo-prod-skyfire-std-us/01/535/16/402679728/1721261846.mp4?filename=Mountain+-+34608.mp4"
            ></video>

            <p>
                The HTML <code>&lt;figure&gt;</code> (Figure With Optional
                Caption) element represents self-contained content, potentially
                with an optional caption, which is specified using the
                <code>&lt;figcaption&gt;</code> element. The figure, its
                caption, and its contents are referenced as a single unit.
            </p>

            <figure>
                <video
                    controls
                    muted
                    src="https://vod-progressive.akamaized.net/exp=1602938246~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F535%2F16%2F402679728%2F1721261846.mp4~hmac=e215fd696feba5e72690daf8b2e759885db9a16a8a9780f6f5eeba5596fcc162/vimeo-prod-skyfire-std-us/01/535/16/402679728/1721261846.mp4?filename=Mountain+-+34608.mp4"
                ></video>
                <figcaption>
                    Dolorem inventore aspernatur repellendus. Magni quisquam
                    quod, aliquam fugiat cupiditate adipisci quasi.
                </figcaption>
            </figure>

            <h3>Embedded Content</h3>

            <p>
                The HTML Inline Frame element (<code>&lt;iframe&gt;</code>)
                represents a nested browsing context, embedding another HTML
                page into the current one.
            </p>

            <iframe
                src="https://codesandbox.io/embed/framer-motion-keyframes-ekks8?fontsize=14&hidenavigation=1&theme=dark"
                title="Framer Motion: Keyframes"
            ></iframe>

            <p>
                The HTML <code>&lt;figure&gt;</code> (Figure With Optional
                Caption) element represents self-contained content, potentially
                with an optional caption, which is specified using the
                <code>&lt;figcaption&gt;</code> element. The figure, its
                caption, and its contents are referenced as a single unit.
            </p>

            <figure>
                <iframe
                    src="https://codesandbox.io/embed/framer-motion-keyframes-ekks8?fontsize=14&hidenavigation=1&theme=dark"
                    title="Framer Motion: Keyframes"
                ></iframe>
                <figcaption>
                    Dolorem inventore aspernatur repellendus. Magni quisquam
                    quod, aliquam fugiat cupiditate adipisci quasi.
                </figcaption>
            </figure>

            <h3>Audio</h3>

            <p>
                The HTML <code>&lt;audio&gt;</code> element is used to embed
                sound content in documents. It may contain one or more audio
                sources, represented using the src attribute or the
                <code>&lt;source&gt;</code> element: the browser will choose the
                most suitable one. It can also be the destination for streamed
                media, using a MediaStream.
            </p>

            <audio
                controls
                src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Yung_Kartz/June_2019/Yung_Kartz_-_07_-_Straight_Shot.mp3"
            ></audio>

            <p>
                The HTML <code>&lt;figure&gt;</code> (Figure With Optional
                Caption) element represents self-contained content, potentially
                with an optional caption, which is specified using the
                <code>&lt;figcaption&gt;</code> element. The figure, its
                caption, and its contents are referenced as a single unit.
            </p>

            <figure>
                <audio
                    controls
                    src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Yung_Kartz/June_2019/Yung_Kartz_-_07_-_Straight_Shot.mp3"
                ></audio>
                <figcaption>
                    Dolorem inventore aspernatur repellendus. Magni quisquam
                    quod, aliquam fugiat cupiditate adipisci quasi.
                </figcaption>
            </figure>

            <h2>Other Block Elements</h2>

            <h3>Quotes</h3>

            <p>
                The HTML <code>&lt;blockquote&gt;</code> Element (or HTML Block
                Quotation Element) indicates that the enclosed text is an
                extended quotation. Usually, this is rendered visually by
                indentation. A URL for the source of the quotation may be given
                using the cite attribute, while a text representation of the
                source can be given using the <code>&lt;cite&gt;</code> element.
            </p>

            <blockquote cite="https://www.brainyquote.com/quotes/elon_musk_567211">
                "People work better when they know what the goal is and why. It
                is important that people look forward to coming to work in the
                morning and enjoy working."
                <br />
                <br />
                <cite>– Elon Musk</cite>
            </blockquote>

            <h3>Preformatted Content</h3>

            <p>
                The HTML <code>&lt;pre&gt;</code> element represents
                preformatted text which is to be presented exactly as written in
                the HTML file. The text is typically rendered using a
                non-proportional (&quot;monospace&quot;) font. Whitespace inside
                this element is displayed as written.
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
                The HTML <code>&lt;hr&gt;</code> element represents a thematic
                break between paragraph-level elements: for example, a change of
                scene in a story, or a shift of topic within a section.
            </p>

            <hr />

            <p>
                Historically, this has been presented as a horizontal rule or
                line. While it may still be displayed as a horizontal rule in
                visual browsers, this element is now defined in semantic terms,
                rather than presentational terms, so if you wish to draw a
                horizontal line, you should do so using appropriate CSS.
            </p>

            <h3>Interactive Elements</h3>

            <p>
                The HTML Details Element (<code>&lt;details&gt;</code>) creates
                a disclosure widget in which information is visible only when
                the widget is toggled into an &quot;open&quot; state. A summary
                or label can be provided using the
                <code>&lt;summary&gt;</code> element.
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
                    What do you call a mac 'n' cheese that gets all up in your
                    face?
                </summary>
                Too close for comfort food!
            </details>
            <details>
                <summary>Why couldn't the bicycle stand up by itself?</summary>
                It was two tired!
            </details>

            <h3>Progress Bar</h3>

            <p>
                The HTML <code>&lt;progress&gt;</code> element displays an
                indicator showing the completion progress of a task, typically
                displayed as a progress bar.
            </p>

            <progress max="100" value="70">
                70%
            </progress>
            <progress>70%</progress>

            <h2>Tables</h2>

            <p>
                The HTML <code>&lt;table&gt;</code> element represents tabular
                data &#x2014; that is, information presented in a
                two-dimensional table comprised of rows and columns of cells
                containing data.
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
                The HTML <code>&lt;form&gt;</code> element represents a document
                section containing interactive controls for submitting
                information.
            </p>

            <form>
                <fieldset>
                    <legend>Personal Information</legend>
                    <p>
                        <label>First name</label>
                        <br />
                        <input
                            type="text"
                            name="first_name"
                            placeholder="e.g. John"
                        />
                    </p>
                    <p>
                        <label>Last name</label>
                        <br />
                        <input
                            type="text"
                            name="last_name"
                            placeholder="e.g. Doe"
                        />
                    </p>
                    <p>
                        <label>Gender</label>
                        <br />
                        <label>
                            <input type="radio" name="gender" value="Male" />
                            Male
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="gender" value="Female" />
                            Female
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="other-none-na"
                            />
                            Non-binary
                        </label>
                    </p>
                </fieldset>
                <fieldset>
                    <legend>Contact Information</legend>
                    <p>
                        <label>Email</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            required=""
                            placeholder="e.g. john.doe@example.com"
                        />
                    </p>
                    <p>
                        <label>Phone number</label>
                        <br />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="e.g. +49 1234 5678901"
                        />
                    </p>
                </fieldset>
                <p>
                    <label>Password</label>
                    <br />
                    <input type="password" name="password" />
                </p>
                <p>
                    <label>Country</label>
                    <br />
                    <select>
                        <option>Germany</option>
                        <option>China</option>
                        <option>India</option>
                        <option>United States</option>
                        <option>Indonesia</option>
                        <option>Brazil</option>
                    </select>
                </p>
                <p>
                    <label>Comments</label>
                    <br />
                    <textarea placeholder="What do you think?"></textarea>
                </p>
                <p>
                    <label>
                        <input type="checkbox" value="terms" />I agree to the{" "}
                        <a>terms and conditions</a>
                    </label>
                </p>
                <p>
                    <button>Sign up</button>
                    <button type="reset">Reset form</button>
                    <button disabled="disabled">Disabled</button>
                </p>
            </form>
        </>
    );
}
