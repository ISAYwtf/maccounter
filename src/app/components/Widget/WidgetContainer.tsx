import { connect } from 'react-redux'
import React from 'react'
import Widget from '@components/Widget/Widget'
import { getExpensesState } from '@store/expenses-store/expensesSelectors'
import { WidgetProps } from '@components/Widget/WidgetProps'
import { State } from '@store/redux-store'

const WidgetContainer: React.FC<WidgetProps> = (props) => (
    <Widget {...props} />
)

const mapStateToProps = (state: State) => ({
    expenses: getExpensesState(state),
})

export default connect(mapStateToProps)(WidgetContainer)
