Exercise1.1:1.
When a user enters an URL in the browser, how does the browser fetch the desiredresult ? Explain this with the below in mind and Demonstrate this by drawing a diagramfor the same.(2-3hours)
a.What is the main functionality of the browser?
Ans: The main function of a browser is to present the web resource you choose, by requesting it from
     the server and displaying it in the browser window. The resource is usually an HTML document, but 
     may also be a PDF, image, or some other type of content. The location of the resource is specified 
     by the user using a URI (Uniform Resource Identifier).
b.High Level Components of a browser.
Ans: The browser's High Level Components are:
        1.The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
        2.The browser engine: marshals actions between the UI and the rendering engine.
        3.The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
        4.Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
        5.UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
        6.JavaScript interpreter. Used to parse and execute JavaScript code.
Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
Browser components
Figure : Browser components
c.Rendering engine and its use.
Ans: The responsibility of the rendering engine is well… Rendering, that is display of the requested contents on the browser screen.
     By default the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extension; for example, displaying PDF documents using a PDF viewer plug-in. However, in this chapter we will focus on the main use case: displaying HTML and images that are formatted using CSS.
     Different browsers use different rendering engines:
      Internet Explorer uses Trident, Firefox uses Gecko, Safari uses WebKit. Chrome and Opera (from version 15) use Blink, a fork of WebKit.
      WebKit is an open source rendering engine which started as an engine for the Linux platform and was modified by Apple to support Mac and Windows.
d.Parsers (HTML, CSS, etc)
The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.
The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.
e.Script Processors
Ans: The script processor executes Javascript code to process an event. The processor uses a pure Go implementation of ECMAScript 5.1 and has no external dependencies. This can be useful in situations where one of the other processors doesn’t provide the functionality you need to filter events.
The processor can be configured by embedding Javascript in your configuration file or by pointing the processor at external file(s). 
f.Tree construction.
Ans: When the parser is created the Document object is created. During the tree construction stage the DOM tree with the Document in its root will be modified and elements will be added to it. Each node emitted by the tokenizer will be processed by the tree constructor.
g.Order of script processing.
Ans: The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a <script> tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. This was the model for many years and is also specified in HTML4 and 5 specifications. Authors can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.
h.Layout and Painting
Ans: 1.Layout:When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout or reflow.
2.Painting : In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. Painting uses the UI infrastructure component.