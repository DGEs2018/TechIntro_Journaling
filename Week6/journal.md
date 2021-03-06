# 06.05.2019
* SPAs
- What they are ?
    - Are special kind of websites where the user doesn't see any reload despite interacting with the page.
    - SPA relies primarily on JS - interaction with server to change the content in the page.
    - Usually heavy on the first load as this requires the browser to download the entire content.
    - Problems with SEO and SPAs
        - Not very suitable in terms of search engine optimization.
        - HTML sent by the server is by default an empty `<div>` and content is loaded afterwards with JS
        - In case that the crawler can't execute JS - then the reload won't be seen
        - Rendering
        - Multipage applications - as using either server-side or runtime rendering.
        - Client-side rendering
            - Happens in the client - meaning that the client needs to execute JS
            - Hence takes longer to see the content in the page.
            - By default, this makes use of framework such as React or VueJS.
        - Server-side rendering
            - All begins with the client sending a request to a server.
            - In the old way - server can then either respond either with an empty HTML or create HTML before sending it
            - SSR - html is populated in the server & then sent to the client. Then this will be executed at the client side - the plus this time, it now only needs to synchronize with the html instead of having to render the entire page.
    - Include certain files and directories to the .gitignore list
     1. vim .gitignore 
     2. git config --global core.excludesfile ~/.gitignore

# 07.05.2019
* Multi page App
    - Any small action on the web page triggers a complete refresh of the entire page
    - HTML and Content the same files
    - Everything is happening from the server-side
    - Preferable where static HTML content prevail (blog page)
- SPAs
    - Go to page, you find empty HTML in content
    - By single page, it isn't to mean that it's literally single, the page just doesn't do a complete page reload on refresh
    - Static (files)
    - Content is what needs a DB (isn't hence static content)
    - Different servers
    - The content is then decoupled from the UI
    - So fast that user never sees an empty HTML
    - User just requests more content
        - Problems
            - Some browsers might not be JS indexed / search engine problems
            - Slow / poor connection might affect the content displayed
    - Contains always static files
    - Client can't differentiate whether rendering was client-side or server-side !!! (given good internet connection)
        - Client-side rendering
            - Happens at the client-side (at the browser and/or crawler)
            - Empty <div></div> would then be populated with the content (the JS will do this after fetching content from the )
            - 
        - Server-side rendering
                - Contains a mix of 
                - On the first request (rendering is the same as that of in multipage apps )
     - If client have more interactions SPAs might be more prefered
- Node JS
    - Contains all sort of files altogether as opposed the old way 
- Building multipage application using ReactJS
    - HTML files already pre-existed
    - 
- Dynamic vs Static pages
    - Dynamic - every time request is sent, it's created on the fly
    - Static - doesn't have to be created  (One does with just a dummy page)

# 08.05.2019
* Git
    - A way of tracking several versions of changes to a documentation.
    - Working directory, staging and commit stages
    - Repository (repo for short) is a working directory on Git (bad practice is to have a repo inside a repo)
    - Master
    - Branches (could have as many as possible)
    - Pull request & code review
    - Some prefer to constantly work on the masters branch
- Environments - the copy of the project that has not yet reached end-users, but rather for developers and managers in the project.
- Development (consist of multiples of sprints)
- Test (checking functionality, UI )
- Staging (different to the stage discussed in Git, tests if newer versions are running without errors with real data, in the same environment as that of the end-users)
- Deployment (the stage when moving from staging to production)
- Production
- SPA + client page application is something like downloading the desktop app everytime you click the application.

# 09.05.2019
* Eloquent Javascript Chapter 1 - values, types, and operators
    - Bits - anything of zeros and ones. Any piece of discrete information can therefore be reduced to a sequence of zeros and ones - to be then represented in bits.
    -  right to left with increment of two from right to left Ex. 13 = 8 + 4 + 1, 00001101, 1 - where the summation entity are to a power of two, 0 when not.
    - Values - a typical modern computer contains > (30 billion) 3e10 bits in its working memory.
    - To manage with such quantities of bits - these need to be separated into chunks called values in JS environment.
        - values
            - numbers 
            - pieces of text(string)
            - functions etc.
    - JS uses a fixed number of bits - i.e. 64. With N decimal digits, 10^N numbers : likewise, with 64 binary digits, 2^64 = 18 quintillion(18e18) numbers can be represented. \
    - Fractional numbers, scientific notations 2.998 x 10^8 = 2.998e8
    - Arithmetic : addition, subtraction, multiplication and division, remainder operation ( using the modulo % symbol)
    - Important is the rule of precedence, for operators of same precedence appearing next to one another left to right & in case of doubt binding numbers with parentheses () is ideal. 
    - 3 special numbers in JS
        - infinity
        - -infinity
        - NaN
    - Strings - data type, representing a text, using single & double quotes, or backticks (need to match at the start & end)
    - "This is the first line\nAnd this is the second" \n - means new line, \t, tab
    - Strings can neither be divided, bne multiplied nor subtracted, but could take the `+` operator for concatenation.
    - Operator can also be written as words, such as `typeof` (unary operator) - returning a string value with the type of the given value. Example - console.log(typeof 4.5) --> number
    - Boolean values - distinguishes between true and false
    - Comparison in strings - uppercase letters are always “less” than lowercase ones, so "Z" < "a", and nonalphabetic characters (!, -, and so on) are also included in the ordering
    - The only value in JS that is not equal to itself (NaN- not a number, the third data type) - i.e. console.log(Nan == NaN) --> false
# 10.05.2019
* JS Eloquent chapter 1 continued....
    - Logical Operators could also be applied to Boolean values: `and, or & not`
    - JS compromises with to accepting any program possibly given
    ```Examples :  console.log(10 * null) // 0, 
                console.log("9" - 1) //8
                console.log ("9" + 1) // 91, 
                console.log ("nine" * 2) // NaN, 
                console.log(false == 0) // true
                console.log(false === 0) // false
    ```
    - When an operator is applied to the value of 'wrong' data type - JS quietly coerces to change the value to what it needs.
    - Accidental type conversions
    - To test a whether a value has a real value instead of `null or undefined` - it could be compared to `null` with the == (or !=) operator
    - But how about when testing if a value has the precise value `false` - `0 == false` and `" " == false`  are also true due to the automatic type conversion.
    - This additional operators : 1. "===" and 2. "!==" - while the 1^st tests equality of both type and value (precise equality), the 2^nd test whether they are not precisely equal
    - Short circuiting of logical operators
         - && & || - will return either the original (left-hand side value) or the right-hand side

* Eloquent JS Chapter 2 - Program Structure
- Bindings 
    - How does a program remember an internal state ?
    - JavaScript's way of to catch and hold values - binding or variable
    - var & const - could be used to declare names : for the most part const is used in this chapter due to the confusing properties of `var`
    - Binding names - could be any word. Digits, could be part of it, they just shouldn't be the initials
    - Also allowed, `$, _`
    - No other punctuations or special characters
    - The list of reserved words which could not be used as variable names 
    ```break case catch class const continue debugger default
       delete do else enum export extends false finally for
       function if implements import interface in instanceof let
       new package private protected public return static super
       switch this throw true try typeof var void while with yield
    ```
    - Boolean (""), Boolean(false), Boolean(undefined) will all return false.


        