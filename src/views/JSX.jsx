import styled from 'styled-components-vue';
const Wrapper = styled.div``;
export default {
  render() {
    return (
      <Wrapper>
        <div onClick={() => this.index++}>
          {this.index % 2 === 0 ? <div>偶数</div> : <h1>奇数</h1>}
        </div>
        <img src={this.img} />
        <input
          type="text"
          value={this.value}
          onInput={(e) => (this.value = e)}
        />
      </Wrapper>
    );
  },
  data() {
    return {
      msg: 'hello,jsx!',
      index: 0,
      img: '',
      value: '',
    };
  },
};
