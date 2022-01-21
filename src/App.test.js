import App from './App'
import { shallow } from 'enzyme';

describe('App component', () => {
it('Check if reset icon exist in the Game', () => {
    const wrapper = shallow(<App />);
    const resetBtn = wrapper.find('div.resetIcon');
    expect(resetBtn).toBeTruthy();
    // Checks if the instructions are displayed currently
    const instructionText = wrapper.find('p.instruction').text()
    expect(instructionText).toBe('Put the words in order to make  a correct sentence.')
  });

  
  it('Checks if the instructions are displayed currently', () => {
    const wrapper = shallow(<App />);
    const instructionText = wrapper.find('p.instruction').text()
    expect(instructionText).toBe('Put the words in order to make  a correct sentence.')
  });
});

