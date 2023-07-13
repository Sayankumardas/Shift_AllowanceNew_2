function createData(name, id, pname, shtype, stime) {
  return { name, id, pname, shtype, stime };
}

const employees = [
  createData("Sayan Kumar Das", 900288, "ABC", "Regular", "9.00am-6.00pm"),
  createData("Satish Kumar", 876290, "XYZ", "Night", "12.00am-9.00am"),
  createData("Rajesh Mukharje", 908655, "PQN", "Evening", "6.00pm-3.00am"),
  createData("Nitin Saha", 902736, "ABC", "Night", "12.00am-9.00am"),
  createData("Mohant Sharma", 901567, "MNO", "Morning", "6.00am-3.00pm")
];
export default employees;
