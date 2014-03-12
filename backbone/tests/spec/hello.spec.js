window.hello = function () {
    return "Hello World";
};

describe("Trying out the test libraries", function () {
    describe("Chai", function () {
        it("should be equal using 'expect'", function () {
            expect(hello()).to.equal("Hello World");
        });
        it("should not be equal to 'Hello Bob'", function () {
            expect(hello()).not.to.equal("Hello Bob");
        })
    });
    describe("Sinon.JS", function () {
        it("should report spy called", function () {
            var helloSpy = sinon.spy(window, 'hello');
            expect(helloSpy.called).to.be.false;
            hello();
            expect(helloSpy.called).to.be.true;
            hello.restore();
        });
    });
});