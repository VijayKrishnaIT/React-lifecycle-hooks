React Component LifeCycle Hooks

        1. constructor
        2. componentWillMount()
        3. render()
        4. componentDidMount()
        5. componentWillReceiveProps()
        6. shouldComponentUpdate()

        // component kill methods

        7. componentWillUpdate()
        8. componentDidUpdate()
        9. componentWillUnmount()

Recently Added LifeCycle Hooks

Context API, useEffect, useState --- Newly added version by version

Explanation:

# Constructor()

        constructor will execute at booting time of component --constructor will execute only once
        Define state in constructor
        js is synchronous - code will execute line by line

# componentWillMount()

        componentWillMount() will execute after constructor
        componentWillMount() will execute only once
        in general we will do the initial modifications in state
        in general we will set global parameters like width, height

# render()

        after componentWillMount() automatically render() function will execute
        render() is mandatory lifecycle hook(main lifecycle hook)
        in general, we will place presentation logic in render()
        when ever change detected in state or props automatically this lifecycle hooks will execute

# componentDidMount()

        after render function immediately componentDidMount() life cycle hook will execute
        in general we will make asynchronous calls in ComponentWillMount()
        this is recommended state to change the state of component

# componentWillReceiveProps()

        when component will recieve props from redux

# shouldComponentUpdate()

        if we want to update the state return "true" else "false"

# UNSAFE_componentWillUpdate()

        death method --> perform cleanup operations

# componentDidUpdate()

        if we integrate any third party UI elements
        plugin logic will write here

# componentWillUnmount()

        Before killing the component componentWillUnmount is executed.
        death method --> perform cleanup operations

# First Output

/\*
parent constructor
componentWillMount
parent render function

child constructor
child componentWillMount
child render function

child componentDidMount
parent componentDidMount

\*/

# Second Output

## Whenever state changed then render() function will execute

/\*
parent render function
child render function

\*/
