import React, { Component } from 'react'
import { View } from 'react-native'
import { Form, Item, Input, Button, Text as NBText } from 'native-base'

export class ReadTask extends Component {
    state = {
        text: '',
        task: this.props.navigation.state.params.readItem.textValue
    }

    onChangeText = event => {
        this.setState({ task: event.nativeEvent.text })
    }

    onAddTask = () => {
        this.props.navigation.state.params.readItem.textValue = this.state.task;
        this.props.navigation.state.params.saveItem(this.props.navigation.state.params.readItem)
        this.props.navigation.goBack()
    }

    componentDidMount() {
        console.log(this.props.navigation.state.params.readItem);
        this.state.task = this.props.navigation.state.params.readItem.textValue;
    }

    render() {

        return (
            <View>
                <View style={{ marginRight: 10 }}>
                    <Form>
                        <Item>
                            <Input
                                placeholder='Enter a new task...'
                                value={this.state.task}
                                autoFocus
                                clearButtonMode='always'
                                autoCorrect={false}
                                onChange={this.onChangeText}
                                onSubmitEditing={this.onAddTask}
                                returnKeyType={'done'}
                                multiline={true}
                                style={{ height: 70, paddingTop: 10 }}
                            />
                        </Item>
                    </Form>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button
                        style={{ backgroundColor: '#5067FF', margin: 25, justifyContent: 'center' }}
                        onPress={this.onAddTask}
                    >
                        <NBText style={{ fontWeight: 'bold' }}>Update</NBText>
                    </Button>
                </View>
            </View>
        )
    }
}

export default ReadTask
