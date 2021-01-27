const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, onFail) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    }
    else {
      const errorMessage = "Country could not be found";
      onFail(errorMessage);
    }
  }, delay());
};

// Must print "Returned country is Brazil" if succeed, or "Error getting country: Country could not be found" if fail
getCountry(countryName, printErrorMessage);

// Must print "Brazil's currency is the Real" if succeed, or "Error getting country: Country could not be found" if fail
getCountry(countryCurrency, printErrorMessage);