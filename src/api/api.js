
const operations= [
    { id: '2', date: '05.05.2021', name: 'apple', quantity: '1', distance: '5' },
    { id: '3', date: '05.05.2021', name: 'apricot', quantity: '2', distance: '4' },
    { id: '4', date: '05.05.2021', name: 'avocado', quantity: '3', distance: '3' },
    { id: '5', date: '04.05.2021', name: 'pineapple', quantity: '4', distance: '2' },
    { id: '6', date: '03.05.2021', name: 'banana', quantity: '8', distance: '1' },
    { id: '7', date: '05.05.2021', name: 'bergamot', quantity: '1', distance: '5' },
    { id: '8', date: '03.05.2021', name: 'durian', quantity: '2', distance: '4' },
    { id: '9', date: '05.05.2021', name: 'grapefruit', quantity: '3', distance: '5' },
    { id: '10', date: '02.05.2021', name: 'kiwi', quantity: '4', distance: '2' },
    { id: '11', date: '03.05.2021', name: 'lime', quantity: '5', distance: '10' },
    { id: '12', date: '05.05.2021', name: 'lemon', quantity: '1', distance: '5' },
    { id: '13', date: '01.05.2021', name: 'lemon', quantity: '10', distance: '4' },
    { id: '14', date: '05.05.2021', name: 'pear', quantity: '3', distance: '3' },
    { id: '15', date: '02.05.2021', name: 'banana', quantity: '6', distance: '6' },
    { id: '16', date: '03.05.2021', name: 'pineapple', quantity: '8', distance: '1' },
    { id: '17', date: '05.05.2021', name: 'peach', quantity: '1', distance: '5' },
    { id: '18', date: '05.05.2021', name: 'avocado', quantity: '2', distance: '4' },
    { id: '19', date: '05.05.2021', name: 'avocado', quantity: '3', distance: '3' },
    { id: '20', date: '04.05.2021', name: 'lemon', quantity: '4', distance: '2' },
    { id: '21', date: '03.05.2021', name: 'mango', quantity: '8', distance: '1' },
    { id: '22', date: '05.05.2021', name: 'bergamot', quantity: '1', distance: '5' },
    { id: '23', date: '03.05.2021', name: 'apple', quantity: '2', distance: '4' },
    { id: '24', date: '05.05.2021', name: 'bergamot', quantity: '3', distance: '5' },
    { id: '25', date: '02.05.2021', name: 'apple', quantity: '4', distance: '2' },
    { id: '26', date: '03.05.2021', name: 'banana', quantity: '5', distance: '10' },
    { id: '27', date: '05.05.2021', name: 'bergamot', quantity: '1', distance: '5' },
    { id: '28', date: '01.05.2021', name: 'banana', quantity: '10', distance: '4' },
    { id: '29', date: '05.05.2021', name: 'bergamot', quantity: '3', distance: '3' },
    { id: '30', date: '02.05.2021', name: 'banana', quantity: '6', distance: '6' },
    { id: '31', date: '03.05.2021', name: 'grapefruit', quantity: '8', distance: '1' },
];


export const operationsApi = {
    getOperations(countUserOnPage = 5, currentPage = 1, column, condition, searchField) {
        let filterOperations = [];
        switch (condition) {
            case 'equally':
                filterOperations = operations.filter(operation => operation[column] == searchField);
                break;
            case 'includes':
                filterOperations = operations.filter(operation => operation[column].includes(searchField));
                break;
            case 'more':
                filterOperations = operations.filter(operation => Number(operation[column]) > Number(searchField))
                break;
            case 'less':
                filterOperations = operations.filter(operation => Number(operation[column]) < Number(searchField))
                break;
            default:
                filterOperations = operations.filter(() => true);
        }

        let filterOperationsOnPage = [];
        for (let i = (currentPage - 1) * countUserOnPage; i < currentPage * countUserOnPage; i++) {
            if(filterOperations[i]){
              filterOperationsOnPage.push(filterOperations[i])  
            }
            
        }
        return {operations: filterOperationsOnPage, totalCount:filterOperations.length}
    }
}