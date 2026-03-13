class Dog():
    def __init__(self, breed, size):
        self.breed = breed
        self.size = size
        print("The dog's breed is {}".format(self.breed))
        
    def eat(self,food):
        print("The {} dog breed loves {}". format(self.breed, food))
        
    def sleepTime(self,time):
        print("The {} dog breed sleeps at {}". format(self.breed, time))    
          
dog =Dog('maltese', 'medium')
dog.eat('Dog food') 
dog.sleepTime('9pm')    

class Employee():
    empCount = 0
    
    def __init__(self,name,salary):
        self.name =name
        self.salary = salary
        Employee.empCount += 1
        
    def displayCount(self):
        print ("Total Employee %d" )% Employee.empCount
           
        
    def displayEmployee(self):
        print("Name:", self.name, ", Salary: ", self.salary)  
        
employee = Employee("Zara", 2000)
# emp2 = Employee("Manni", 5000)  
# emp1.displayEmployee()
# emp2.displayEmployee()

# print("Total Employee %d") % Employee.empCount        