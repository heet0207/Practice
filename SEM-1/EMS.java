import java.io.*;
import java.util.*;

class Employee {
    @SuppressWarnings("FieldMayBeFinal")
    private int id;
    @SuppressWarnings("FieldMayBeFinal")
    private String name;
    @SuppressWarnings("FieldMayBeFinal")
    private String department;
    public Employee(int id, String name, String department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    public int getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getDepartment() {
        return department;
    }
    @SuppressWarnings("override")
    public String toString() {
        return id + ", " + name + ", " + department;
    }
}
@SuppressWarnings("unchecked")
// The EMS class implements an Employee Management System using various data structures.
// It allows adding, searching, updating, and displaying employee records.
// It also handles file operations to persist employee data.
// The program uses ArrayDeque, HashSet, HashMap, Hashtable, BufferedReader, BufferedWriter, FileReader, FileWriter, RandomAccessFile, and Scanner for input/output operations.
// The program prompts the user to enter details for 5 employees, stores them in an ArrayDeque, checks

public class EMS {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayDeque<Employee> employeeQueue = new ArrayDeque<>();
        HashSet<Employee> uniqueEmployees = new HashSet<>();
        HashMap<String, List<Employee>> departmentMap = new HashMap<>();
        HashMap<Integer, Employee> employeeTable = new HashMap<>();
        System.out.println("Enter details for 5 employees:");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Employee " + i);
            System.out.print("Employee ID: ");
            int id = scanner.nextInt();
            scanner.nextLine(); // Consume the newline
            System.out.print("Employee Name: ");
            String name = scanner.nextLine();
            System.out.print("Employee Department: ");
            String department = scanner.nextLine();
            Employee employee = new Employee(id, name, department);
            if (!uniqueEmployees.contains(employee)) {
                employeeQueue.offer(employee);@SuppressWarnings("unused")
                boolean var3 = true;
                uniqueEmployees.add(employee);
                employeeTable.put(id, employee);
                if (!departmentMap.containsKey(department)) {
                    departmentMap.put(department, new ArrayList<>());
                }
                departmentMap.get(department).add(employee);
            } else {
                System.out.println("Employee with ID " + id + " already exists. Skipping...");
            }
        }
// Write employee records to the file "employees.txt"
        try (FileWriter fileWriter = new FileWriter("employees.txt");
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter)) {
            for (Employee employee : employeeQueue) {
                bufferedWriter.write(employee.toString());
                bufferedWriter.newLine();
            }
        } catch (IOException e) {
            System.out.println("Error writing to the file.");
        }
// Read employee records from "employees.txt" and populate data structures
        try (BufferedReader bufferedReader = new BufferedReader(new FileReader("employees.txt"))) {
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                String[] parts = line.split(", ");
                int id = Integer.parseInt(parts[0]);
                String name = parts[1];
                String department = parts[2];
                Employee employee = new Employee(id, name, department);
                if (!uniqueEmployees.contains(employee)) {
                    employeeQueue.offer(employee);
                    uniqueEmployees.add(employee);
                    employeeTable.put(id, employee);
                    if (!departmentMap.containsKey(department)) {
                        departmentMap.put(department, new ArrayList<>());
                    }
                    departmentMap.get(department).add(employee);
                }
            }
        } catch (FileNotFoundException e) {
            System.out.println("File not found.");
        } catch (IOException e) {
            System.out.println("Error reading from the file.");
        }
// Utilize RandomAccessFile to write employee data back to "employees.txt"
        try (RandomAccessFile randomAccessFile = new RandomAccessFile("employees.txt", "rw")) {
            randomAccessFile.setLength(0); // Clear the file
            for (Employee employee : employeeQueue) {
                randomAccessFile.writeBytes(employee.toString() + "\n");
            }
        } catch (FileNotFoundException e) {
            System.out.println("File not found.");
        } catch (IOException e) {
            System.out.println("Error writing to the file.");
        }
// Display employee records from "employees.txt" using RandomAccessFile
        System.out.println("\nEmployee Records from RandomAccessFile:");
        try (RandomAccessFile randomAccessFile = new RandomAccessFile("employees.txt", "r")) {
            String line;
            while ((line = randomAccessFile.readLine()) != null) {
                System.out.println(line);
            }
        } catch (FileNotFoundException e) {
            System.out.println("File not found.");
        } catch (IOException e) {
            System.out.println("Error reading from the file.");
        }
// Search for employee with name "Rajesh Sharma" in departmentMap
        String searchName = "Rajesh Sharma";
        List<Employee> searchResult = new ArrayList<>();
        List<Employee> marketingEmployees = departmentMap.get("Marketing");
        if (marketingEmployees != null) {
            for (Employee employee : marketingEmployees) {
                if (employee.getName().equals(searchName)) {
                    searchResult.add(employee);
                }
            }
        }
// Display search results
        System.out.println("\nSearch Result:");
        for (Employee employee : searchResult) {
            System.out.println(employee);
        }
// Update the department of employee with id 101 to "Logistics"
        if (employeeTable.containsKey(101)) {
            Employee employeeToUpdate = employeeTable.get(101);
            String oldDepartment = employeeToUpdate.getDepartment();
            employeeToUpdate = new Employee(101, employeeToUpdate.getName(), "Logistics");
            employeeTable.put(101, employeeToUpdate);
            List<Employee> oldDepartmentEmployees = departmentMap.get(oldDepartment);
            if (oldDepartmentEmployees != null) {
                oldDepartmentEmployees.removeIf(e -> e.getId() == 101);
            }
            if (!departmentMap.containsKey("Logistics")) {
                departmentMap.put("Logistics", new ArrayList<>());
            }
            departmentMap.get("Logistics").add(employeeToUpdate);
        }
// Display updated departmentMap
        System.out.println("\nUpdated Department Map:");
        for (Map.Entry<String, List<Employee>> entry : departmentMap.entrySet()) {
            System.out.println("Department: " + entry.getKey());
            for (Employee employee : entry.getValue()) {
                System.out.println(employee.getId() + ", " + employee.getName());
            }
        }
    }
}