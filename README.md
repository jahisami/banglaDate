# BanglaDate Library

The BanglaDate library is designed to simplify the use of Bangla dates in JavaScript and web development.

## Features

- **Easy to Use**: The library closely resembles the JavaScript Date object, making it easy to implement.
- **Versatility**: Offers various methods for versatile usage. It accepts both Gregorian and Bangla dates as input and provides output in both formats.
- **No Additional Learning Required**: Users familiar with the JavaScript Date object can seamlessly utilize this library.

## How to Use

1. **Import the Library**: Include the library in your HTML file using a script tag or import it in a JavaScript file.
2. **Create a New BanglaDate Object**: Instantiate a new BanglaDate object, optionally passing destructured parameters `{gr, date}`. The `gr` parameter determines if the date provided is Gregorian (`true` by default), while the `date` parameter represents the date string. If parameter is empty, it defaults to the current time.

   ```javascript
   // Example usage
   const bdDate = new BanglaDate();
   ```

   or

   ```javascript
   // Example usage
   const bdDate = new BanglaDate({ date: "02/23/2014" });
   ```

   or

   ```javascript
   // Example usage
   const bdDate = new BanglaDate({ date: "1429-02-15T00:00:00", gr: false });
   ```

3. **Use the Methods**: Utilize the methods provided by the BanglaDate object to perform various operations.

## Methods

- `getFullYear()`: Retrieves the Bangla year.
- `getMonth()`: Retrieves the Bangla month (0-11).
- `getDate()`: Retrieves the Bangla date.
- `getDay()`: Retrieves the day of the week.
- `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`, `getTime()`: Corresponding to their JavaScript Date object counterparts.
- `enDate()`: Retrieves the Gregorian date as a JavaScript Date object.
- `toString({en, dayName, dd, monthName})`: Converts the Bangla date to a string. Supports various formats based on the provided parameters.
- `toTimeString({en, s, tt, detailed})`: Converts the time to a string. Offers customizable formatting options.

## License

This library is provided under the MIT License, allowing free use and distribution.

## Author

- **Jahid Hasan Sami**  
  Undergraduate Student of Physics  
  Dhaka College  
  [Facebook Profile](https://www.facebook.com/jahiSami)
