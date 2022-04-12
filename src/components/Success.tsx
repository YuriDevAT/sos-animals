function Success() {
  return (
    <div className='success'>
      <h1>Successfully reported!</h1>
      <p id='success-p'>Thank you for working together to save the dogs.</p>
      <a href='/'>
        <button type='button' className='btn success-btn'>
          Report another dog
        </button>
      </a>
    </div>
  );
}

export default Success;
