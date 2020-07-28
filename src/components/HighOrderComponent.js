import React from 'react';

export class ListItem extends React.Component {
  componentDidMount() {
    console.log('list item didmount');
  }

  render() {
    return (
      <div>List Item</div>
    )
  }
}

export function convert(WrappedComponent) {
  return class HOC extends WrappedComponent {
    render() {
      const elementsTree = super.render();

      console.log(elementsTree);

      const props = Object.assign({}, elementsTree.props, {
        style: {
          color: 'red'
        }
      })

      const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children);

      return newElementsTree;
    }
  }
}
