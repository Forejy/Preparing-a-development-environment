const React = require ('react')
const { hot } = require ('react-hot-loader')

const HelloWorld = () => { return (
	<div>
		<h1>Hello World!</h1>
	</div> )
}

export default hot(module)(HelloWorld)