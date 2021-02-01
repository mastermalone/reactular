interface TestModuleInterface {
  testVal1: string;
  testVal2: number;
  testval3: string[];
}
const TestModule = (): TestModuleInterface => {
  const testVal1 = 'Hello';
  const testVal2 = 10;
  const testval3 = ['Hello', 'is', 'this', 'thing', 'on?'];

  return {
    testVal1,
    testVal2,
    testval3,
  };
};

export default TestModule;
