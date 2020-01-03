import React, { Component } from "react";
// import _ from "lodash";
import ListItem from "./ListItem";
import Header from "./Header";
import Footer from "./Footer";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.state = {
      currentFilter: "all"
    };
  }

  changeFilter() {
    return filter => e => {
      this.setState({
        currentFilter: filter
      });
    };
  }

  newItemEntered() {
    return event => {
      const text = event.target.value.trim();
      if (event.key === "Enter" && text !== "") {
        const newItem = { title: text };
        const payload = {
          item: newItem
        };
        this.props.addItem(payload);
        event.target.value = "";
        this.inputRef.current && (this.inputRef.current.checked = false);
      }
    };
  }

  // newItemEntered() {
  //   const todoItems = this.state.todoItems;
  //   return event => {
  //     const text = event.target.value.trim();
  //     if (event.key === "Enter" && text !== "") {
  //       const newItem = { title: text };
  //       this.setState({
  //         todoItems: (todoItems && [...todoItems, newItem]) || [newItem]
  //       });
  //       event.target.value = "";
  //       this.inputRef.current && (this.inputRef.current.checked = false);
  //     }
  //   };
  // }

  clearCompleted() {
    return event => {
      this.props.clearCompleteItem();
    };
  }

  // clearCompleted() {
  //   const todoItems = this.state.todoItems;

  //   return event => {
  //     this.setState({
  //       todoItems: todoItems.filter(e => !e.isComplete)
  //     });
  //   };
  // }

  toggleAllItem() {
    return event => {
      const payload = {
        isComplete: event.target.checked
      };

      this.props.changeIsCompleteAll(payload);
    };
  }

  // toggleAllItem() {
  //   const todoItems = this.state.todoItems;
  //   return event => {
  //     // console.log(event.target.checked)
  //     this.setState({
  //       todoItems: todoItems.map(e => ({
  //         ...e,
  //         isComplete: event.target.checked
  //       }))
  //     });
  //   };
  // }

  toggleItem(item) {
    return event => {
      console.log("item", item);
      const payload = {
        item,
        isComplete: !item.isComplete
      };

      this.props.changeIsComplete(payload);
    };
  }

  // toggleItem(item) {
  //   const todoItems = this.state.todoItems;
  //   return event => {
  //     item.isComplete = !item.isComplete;
  //     this.setState({
  //       todoItems: [...todoItems]
  //     });
  //   };
  // }

  destroyItem(item) {
    return event => {
      const payload = {
        item
      };
      this.props.removeItem(payload);
    };
  }

  // destroyItem(item) {
  //   const todoItems = this.state.todoItems;
  //   return event => {
  //     this.setState({
  //       todoItems: todoItems.filter(e => e !== item)
  //     });
  //   };
  // }

  render() {
    const { currentFilter } = this.state;
    let { todoItems } = this.props;

    switch (currentFilter) {
      case "active":
        todoItems = todoItems.filter(e => !e.isComplete);
        break;
      case "completed":
        todoItems = todoItems.filter(e => e.isComplete);
        break;
      default:
    }

    const activeTodoCount =
      (todoItems && todoItems.filter(e => !e.isComplete).length) || 0;

    return (
      <React.Fragment>
        <Header onEnter={this.newItemEntered()} />
        {todoItems && todoItems.length > 0 && (
          <React.Fragment>
            <section className="main">
              <input
                ref={this.inputRef}
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                onChange={this.toggleAllItem()}
                checked={activeTodoCount === 0}
              />
              <label htmlFor="toggle-all" />
              <div className="todo-list">
                <ul className="todo-list-item">
                  {todoItems &&
                    todoItems.map((item, i) => (
                      <ListItem
                        key={"item-" + i}
                        item={item}
                        toggleItem={this.toggleItem(item)}
                        destroyItem={this.destroyItem(item)}
                      />
                    ))}
                </ul>
              </div>
            </section>
            <Footer
              todoItems={todoItems}
              activeTodoCount={activeTodoCount}
              currentFilter={currentFilter}
              changeFilter={this.changeFilter()}
              clearCompleted={this.clearCompleted()}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
