<!--
*** To avoid retyping too much info. Do a search and replace for the following:
*** repo_name, project_title
***
*** Replacing does not fix everything. Please read through the following sections: 
*** 1. How Do I Submit A (Good) Bug Report?
*** 2. Testing
*** 3. Environment details
*** 4. Before Submitting An Enhancement Suggestion
*** 5. How Do I Submit A (Good) Enhancement Suggestion?
*** 6. Pull Requests
-->

<!-- TODO Add testing, environment details -->

# Contributing to repo_name

<!-- Not an avid fan of emojis, but still -->

**:heart: :heart: First off, thanks for taking the time to contribute! :heart: :heart:**

The following is a set of guidelines for contributing to project_title on GitHub. **These are mostly guidelines, not rules**. Use your best judgment, and feel free to propose changes to this document in a pull request.

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#code-of-conduct">Code of Conduct</a></li>
    <li><a href="#i-dont-want-to-read-this-whole-thing-i-just-have-a-question">I don't want to read this whole thing, I just have a question!!!</a></li>
    <li>
      <a href="#how-can-i-contribute">How can I contribute?</a>
      <ul>
        <li><a href="#reporting-bugs">Reporting bugs</a></li>
        <li><a href="#suggesting-enhancements">Suggesting Enhancements</a></li>
        <li><a href="#your-first-code-contribution">Your First Code Contribution</a></li>
        <li><a href="#pull-requests">Pull requests</a></li>
      </ul>
    </li>
    <li>
      <a href="#styleguides">Styleguides</a>
      <ul>
        <li><a href="#commit-messages">Commit messages</a></li>
        <!-- <li><a href="#javascript-styleguide">Javascript Styleguide</a></li> -->
      </ul>
    </li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## Code of Conduct

This project and everyone participating in it is governed by the [project_title Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to siddharth.muscat@gmail.com.

## I don't want to read this whole thing, I just have a question!!!

> **Note:** A bug report, a feature request and a question are different. We assume that by a _question_ you mean a _real question_.

If you want to ask a question, simply use the [Question template][question-template] to create an issue. If a question is not a _real question_, then the issue will be closed and you will be prompted to create a new one with proper details.



## How can I contribute?

### Reporting bugs

This section guides you through submitting a bug report for project_title. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template][bug-report-url], the information it asks for helps us resolve issues faster.

> **Note:** If you find a Closed issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

- First of all, test with the latest update release to see if the issue persists. Frequently, a bug report submitted for an older release is first suggested to test with the available latest update release or even an available latest Early Access release. 
- Make sure that all your own code is logical and proper. Use your instincts. Maybe a proofread by someone else may help.
- **Perform a search on GitHub and Google** to see if this has happened before. If it has, add a comment to the existing issue instead of opening a new one.



#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues][issues-guide] Create an issue on the repository and provide the following information by filling in the [template][bug-report-url].

Explain the problem and include additional details to help maintainers reproduce the problem:

- **Use a clear and descriptive title** for the issue to identify the problem. Title it `"[Bug]: Title here"`.
- **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you loaded the project, which CDN you used, etc. When listing steps, don't just say what you did, but explain how you did it. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut, and if so which one?
- **Provide specific examples** to demonstrate the steps. Include links to files or GitHub projects, or copy/paste-able snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks][md-code-block].
- **Describe the behavior** you observed after following the steps and point out **what exactly is the problem** with that behavior.
- **Explain which behavior you expected** to see instead and why.
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. If you use the keyboard while following the steps, record the GIF with a keybinding visualizer like [Keycastr][keycastr] **(There is also a quick hack for doing this in macos – Simply turn on Sticky keys)**. You can use [this tool][licecap] to record GIFs on macOS and Windows, and [this tool][silentcast] on Linux.
- If the problem wasn't triggered by a specific action, **describe what you were doing before the problem happened** and share more information using the guidelines below.

Provide more context by answering these questions:

- **Did the problem start happening recently** (e.g. after updating to a new version of project_title) or was this always a problem?
  - If the problem started happening recently, **can you reproduce the problem in an older version of project_title?** What's the most recent version in which the problem doesn't happen? <!-- You can download older versions of project_title from... npm? -->
- **Can you reliably reproduce the issue? If not, provide details about how often the problem happens and under which conditions it normally happens**.

Include details about your configuration and environment:

- **Which version** of project_title are you using? <!-- You can get the exact version of project_title by looking at the package.json -->
<!-- - What's the **name and version of the OS** you're using? -->



## Suggesting enhancements

This section guides you through submitting an enhancement suggestion for project_title, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template][enhancement-url], including the steps that you imagine you would take if the feature you're requesting existed.



#### Before Submitting An Enhancement Suggestion

* **Check if you're using the latest version of project_title** <!-- URL to Github Release or npm package? --> and if you can get the desired behavior by changing project_title's options/settings.
<!-- * **Check if there's already a plugin which provides that enhancement.** -->
* **Perform a search on GitHub and Google** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.




#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues][issues-guide]. Create an issue on that repository and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/paste-able snippets which you use in those examples, as [Markdown code blocks][md-code-block].
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of project_title which the suggestion is related to. If you use the keyboard while following the steps, record the GIF with a keybinding visualizer like [Keycastr][keycastr] **(There is also a quick hack for doing this in macos – Simply turn on Sticky keys)**. You can use [this tool][licecap] to record GIFs on macOS and Windows, and [this tool][silentcast] on Linux.
- **Explain why this enhancement would be useful** to most project_title users. <!-- and isn't something that can or should be implemented as a community package. -->
- List some other projects where this enhancement exists.
- **Specify which version** of project_title you are using. <!-- You can get the exact version of project_title by looking at the package.json -->



### Your First Code Contribution

Unsure where to begin contributing to project_title? You can start by looking through the [issues][issues-url].



#### Local development

project_title <!-- and all it's plugins blah blah --> can be developed locally. Just fork and clone this repo, <!-- install all dependencies,  -->and code away! 



### Pull requests

The process described here has several goals:

- Maintain project_title's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible project_title
- Enable a sustainable system for project_title's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

<!-- TODO: fix -->
1. Follow all instructions in [the PR template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)


## Styleguides

## Commit messages

- Use lowercase and past tense ("added a file", not "Add a file"), because the commit will end up being shown like "[Username] [commit message]" and "[Username] added a file" makes better sense
- Use the imperative mood ("move cursor to..." not "moves cursor to...")

Here's a trick which follows the above: When adding commit messages, frame a sentence starting with **"I"**, for example **"I added a file"**, and **remove the "I" when committing**, so you commit **"added a file"**

- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- Consider starting the commit message with an applicable emoji:
    - :art: `:art:` when improving the format/structure of the code
    - :racehorse: `:racehorse:` when improving performance
    <!-- - :non-potable_water: `:non-potable_water:` when plugging memory leaks -->
    - :memo: `:memo:` when writing docs
    <!-- - :penguin: `:penguin:` when fixing something on Linux -->
    <!-- - :apple: `:apple:` when fixing something on macOS -->
    <!-- - :checkered_flag: `:checkered_flag:` when fixing something on Windows -->
    - :bug: `:bug:` when fixing a bug
    - :fire: `:fire:` when removing code or files
    <!-- - :green_heart: `:green_heart:` when fixing the CI build -->
    - :white_check_mark: `:white_check_mark:` when adding tests
    <!-- - :lock: `:lock:` when dealing with security -->
    - :arrow_up: `:arrow_up:` when upgrading dependencies
    - :arrow_down: `:arrow_down:` when downgrading dependencies
    - :shirt: `:shirt:` when removing linter warnings



<!-- ## Javascript styleguide -->


## Acknowledgements

This was almost completely taken from the [atom contributing guide][atom-contributing]. It was not copied but written by hand.



<!-- MARKDOWN LINKS -->
[bug-report-url]: https://github.com/SiddharthShyniben/repo_name/issues/new?assignees=SiddharthShyniben&labels=bug&template=bug_report.md&title=%5BBug%5D%3A+Describe+your+bug
[atom-contributing]: https://github.com/atom/atom/blob/master/CONTRIBUTING.md
[question-template]: https://github.com/SiddharthShyniben/repo_name/issues/new?template=question.md
[issues-guide]: https://guides.github.com/features/issues/
[keycastr]: https://github.com/keycastr/keycastr
[md-code-block]: https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax#quoting-code
[licecap]: https://www.cockos.com/licecap/
[silentcast]: https://github.com/colinkeenan/silentcast
[issues-url]: https://github.com/SiddharthShyniben/repo_name/issues
[enhancement-url]: https://github.com/SiddharthShyniben/repo_name/issues/new?assignees=SiddharthShyniben&labels=enhancement&template=feature_request.md&title=%5BFeature%5D%3A+Describe+your+feature