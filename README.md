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

# First Output

parent constructor
componentWillMount
parent render function

child constructor
child componentWillMount
child render function

child componentDidMount
parent componentDidMount

# Second Output

## Whenever state changed then render() function will execute

parent render function
child render function
