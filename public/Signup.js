import { useState } from 'react';
import { Input } from "/components/ui/input"
import { Label } from "/components/ui/label"
import { Button } from "/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select"

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userType, setUserType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!username || username.length < 3) {
      newErrors.username = 'Username is required and must be at least 3 characters';
    }
    if (!password || password.length < 8) {
      newErrors.password = 'Password is required and must be at least 8 characters';
    }
    if (!firstName || firstName.length < 2) {
      newErrors.firstName = 'First name is required and must be at least 2 characters';
    }
    if (!lastName || lastName.length < 2) {
      newErrors.lastName = 'Last name is required and must be at least 2 characters';
    }
    if (!userType) {
      newErrors.userType = 'User type is required';
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkPasswordStrength = (password) => {
    if (password.length < 8) {
      setPasswordStrength('weak');
    } else if (password.length >= 8 && password.length < 12) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('strong');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form submitted');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-orange-400 to-orange-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {errors.username && <p className="text-red-500">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                checkPasswordStrength(event.target.value);
              }}
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
            {passwordStrength && (
              <p
                className={`text-${
                  passwordStrength === 'weak'
                    ? 'red'
                    : passwordStrength === 'medium'
                    ? 'yellow'
                    : 'green'
                }-500`}
              >
                Password strength: {passwordStrength}
              </p>
            )}
          </div>
          <div className="mb-4">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
          </div>
          <div className="mb-4">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
          </div>
          <div className="mb-4">
            <Label htmlFor="userType">User Type</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
              </SelectContent>
            </Select>
            {errors.userType && <p className="text-red-500">{errors.userType}</p>}
          </div>
          <div className="mb-4">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <Button type="submit">Signup</Button>
        </form>
        <p className="text-gray-500 mt-4">
          Already have an account? <a href="#" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
}
