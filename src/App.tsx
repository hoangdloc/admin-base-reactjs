import './App.css';

const App: React.FC = () => {
    const testArr = [
        'test1',
        'test2',
        'test3',
        'test4',
        'test5',
        'test6',
        'test7',
        'test8',
        'test9',
        'test10'
    ];

    return (
        <>
            {Array(10)
                .fill(0)
                .map((_, index) => (
                    <div
                        key={index}
                        title="Test"
                    >
                        <a href="/">Test</a>
                    </div>
                ))}
            {!!0 && <div>Test</div>}
        </>
    );
};

export default App;
