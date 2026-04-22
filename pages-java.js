// ─── JAVA CORE ───────────────────────────────────────────────────────────────
pages['java-core'] = () => `
<div class="page-header">
  <div class="breadcrumb">Java</div>
  <h1 class="page-title">Java Core Concepts</h1>
  <p class="page-subtitle">Brush-up on fundamentals, OOP principles, and common interview questions.</p>
  ${revisionControls('java-core')}
</div>

<div class="elon-box">
  <strong>⚡ Elon Rule:</strong> If a concept can't be explained in 2 sentences or shown in &lt;10 lines of code, you don't understand it yet. Java interviews are about precision, not volume.
</div>

<h2 class="section-title">What is Java & Why Not Pure OOP?</h2>
<div class="callout callout-blue">
  <strong>Java is not purely OOP</strong> because it supports <strong>primitive types</strong> (int, char, boolean, double…) which are not objects. A pure OOP language treats everything as an object (e.g. Smalltalk). Java's primitives exist for performance.
</div>
<div class="code-block"><pre>// Primitive — NOT an object
int x = 5;

// Object (Wrapper class)
Integer y = 5;          // auto-boxed
System.out.println(y.getClass()); // class java.lang.Integer</pre></div>

<p><strong>Key components to run Java:</strong> Source (.java) → <strong>javac</strong> compiler → Bytecode (.class) → <strong>JVM</strong> → Machine code. JVM handles platform independence.</p>

<h2 class="section-title">Main Features</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:16px 0">
  ${['Platform Independent (WORA)', 'Object-Oriented', 'Strongly Typed', 'Automatic GC', 'Multithreaded', 'Robust & Secure'].map(f => `<div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px;font-size:13px;font-weight:600">${f}</div>`).join('')}
</div>

<h2 class="section-title">String Deep Dive</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">String Pool & Immutability</div>
    <div class="accordion-body">
      <p>Strings in Java are stored in a <strong>String Pool</strong> (part of Heap). When you write <code>"hello"</code>, Java checks the pool first. If found, it returns the same reference — saving memory.</p>
      <div class="code-block"><pre>String a = "hello";
String b = "hello";
System.out.println(a == b);      // true — same pool reference

String c = new String("hello");
System.out.println(a == c);      // false — new heap object
System.out.println(a.equals(c)); // true — same value</pre></div>
      <div class="callout callout-amber">
        <strong>Why immutable?</strong> Thread safety (no sync needed), String Pool works (shared refs safe), Caching of hashCode (HashMap key security), Security (class names, passwords can't be altered).
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">String Toolkit — charAt, CharArray, StringBuilder, Character</div>
    <div class="accordion-body">
      <div class="code-block"><pre>String s = "Hello World";

// charAt — O(1) access
char c = s.charAt(0);         // 'H'

// toCharArray — iterate chars
char[] arr = s.toCharArray();
for (char ch : arr) { ... }

// StringBuilder — mutable, NOT thread-safe (use for single thread)
StringBuilder sb = new StringBuilder();
sb.append("hello");
sb.insert(0, "say ");
sb.reverse();
sb.deleteCharAt(0);
String result = sb.toString();

// StringBuffer — thread-safe, slower
StringBuffer buf = new StringBuffer("safe");

// Character utility
Character.isDigit('5');       // true
Character.isLetter('a');      // true
Character.toUpperCase('a');   // 'A'
Character.toLowerCase('Z');   // 'z'</pre></div>
      <table class="data-table">
        <tr><th>Class</th><th>Mutable?</th><th>Thread-Safe?</th><th>Use When</th></tr>
        <tr><td>String</td><td>No</td><td>Yes (immutable)</td><td>Constants, keys, most cases</td></tr>
        <tr><td>StringBuilder</td><td>Yes</td><td>No</td><td>Building strings in a loop</td></tr>
        <tr><td>StringBuffer</td><td>Yes</td><td>Yes</td><td>Multi-threaded string building</td></tr>
      </table>
    </div>
  </div>
</div>

<h2 class="section-title">OOP — The Core 4</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Abstract Class vs Interface</div>
    <div class="accordion-body">
      <table class="data-table">
        <tr><th>Abstract Class</th><th>Interface</th></tr>
        <tr><td>Can have state (fields)</td><td>Only constants (static final)</td></tr>
        <tr><td>Constructor allowed</td><td>No constructor</td></tr>
        <tr><td>Single inheritance</td><td>Multiple interfaces ok</td></tr>
        <tr><td>Can have any method</td><td>Default + abstract methods (Java 8+)</td></tr>
        <tr><td>Use: shared base impl</td><td>Use: contract / capability</td></tr>
      </table>
      <div class="code-block"><pre>// Interface: a capability/contract
interface Flyable { void fly(); }
interface Swimmable { void swim(); }

// Abstract: partial implementation  
abstract class Animal {
  String name;
  Animal(String name) { this.name = name; }
  abstract void sound();           // must override
  void breathe() { /* shared */ }  // can use as-is
}

class Duck extends Animal implements Flyable, Swimmable {
  Duck() { super("Duck"); }
  public void sound() { System.out.println("Quack"); }
  public void fly()   { System.out.println("Flying"); }
  public void swim()  { System.out.println("Swimming"); }
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Method Overloading vs Overriding</div>
    <div class="accordion-body">
      <div class="code-block"><pre>// OVERLOADING — same name, different params, compile-time
class Calculator {
  int add(int a, int b)         { return a + b; }
  double add(double a, double b){ return a + b; }   // different type
  int add(int a, int b, int c)  { return a+b+c; }   // different count
  // Can we overload main()? YES — but JVM calls main(String[])
  public static void main(int x) { } // valid, but JVM won't call it
}

// OVERRIDING — same signature in subclass, runtime polymorphism
class Animal  { void sound() { System.out.println("..."); } }
class Dog extends Animal {
  @Override
  void sound() { System.out.println("Woof"); }  // runtime dispatch
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Static vs Instance, final/finally/finalize, this/super</div>
    <div class="accordion-body">
      <div class="code-block"><pre>class Foo {
  static int count = 0;   // class-level, shared
  int id;                 // instance-level, per-object

  Foo() {
    count++;
    this.id = count;      // 'this' = current instance
  }
}

class Bar extends Foo {
  Bar() { super(); }      // 'super' calls parent constructor
}

// final = can't change; finally = always runs; finalize = GC hook (deprecated)
final int X = 10;        // constant
try { } catch(E e) { } finally { /* always runs */ }
// finalize() — avoid, use try-with-resources instead</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Aggregation vs Composition, Anonymous Inner Class</div>
    <div class="accordion-body">
      <div class="code-block"><pre>// COMPOSITION — strong ownership, child can't exist alone
class Engine { }
class Car {
  private Engine engine = new Engine(); // Car owns Engine
  // Engine dies when Car dies
}

// AGGREGATION — weak relationship, child can exist independently
class Teacher { }
class School {
  private List&lt;Teacher&gt; teachers; // Teacher exists outside School
}

// ANONYMOUS INNER CLASS — implement interface/abstract on the fly
Runnable r = new Runnable() {
  @Override
  public void run() { System.out.println("Running"); }
};
// Modern: use lambda instead
Runnable r2 = () -> System.out.println("Running");</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Singleton Pattern</div>
    <div class="accordion-body">
      <div class="code-block"><pre>// Thread-safe Singleton (double-checked locking)
public class Singleton {
  private static volatile Singleton instance;
  private Singleton() {}

  public static Singleton getInstance() {
    if (instance == null) {
      synchronized (Singleton.class) {
        if (instance == null) {         // double-check
          instance = new Singleton();
        }
      }
    }
    return instance;
  }
}

// Simpler: Bill Pugh (preferred)
public class Singleton {
  private Singleton() {}
  private static class Holder {
    static final Singleton INSTANCE = new Singleton();
  }
  public static Singleton getInstance() { return Holder.INSTANCE; }
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Exception Handling</div>
    <div class="accordion-body">
      <div class="code-block"><pre>// Checked (must handle): IOException, SQLException
// Unchecked (runtime): NullPointerException, ArrayIndexOutOfBounds
try {
  int[] a = new int[5];
  a[10] = 1;                       // throws ArrayIndexOutOfBoundsException
} catch (ArrayIndexOutOfBoundsException e) {
  System.out.println("Caught: " + e.getMessage());
} finally {
  System.out.println("Always runs");
}

// Custom exception
class InsufficientFundsException extends RuntimeException {
  InsufficientFundsException(String msg) { super(msg); }
}

// try-with-resources (auto-close)
try (BufferedReader br = new BufferedReader(new FileReader("file"))) {
  br.readLine();
} // br.close() called automatically</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Deep vs Shallow Copy, Implicit vs Explicit Cast, volatile</div>
    <div class="accordion-body">
      <div class="code-block"><pre>// SHALLOW COPY — copies references, not objects
int[] original = {1, 2, 3};
int[] shallow = original;          // same array in memory!
shallow[0] = 99;                   // original[0] also becomes 99

// DEEP COPY — new object with new nested objects
int[] deep = original.clone();     // new array, different memory

// TYPE CONVERSION
double d = 9.5;
int i = (int) d;                  // explicit cast — data loss (i=9)
int x = 5;
double y = x;                     // implicit (widening) — safe, automatic

// VOLATILE — ensures visibility across threads (no CPU cache)
class Flag {
  private volatile boolean running = true;  // all threads see latest value
  void stop() { running = false; }
}</pre></div>
    </div>
  </div>
</div>

<h2 class="section-title">Common Coding Problems</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Toggle chars, Count digits, Reverse array, Anagram, First/Last occurrence</div>
    <div class="accordion-body">
      <div class="code-block"><pre>// 1. Toggle characters
String toggle(String s) {
  char[] arr = s.toCharArray();
  for (int i = 0; i &lt; arr.length; i++) {
    if (Character.isUpperCase(arr[i])) arr[i] = Character.toLowerCase(arr[i]);
    else if (Character.isLowerCase(arr[i])) arr[i] = Character.toUpperCase(arr[i]);
  }
  return new String(arr);
} // "hElLo" → "HeLlO"

// 2. Count digits in a number
int countDigits(int n) {
  return String.valueOf(Math.abs(n)).length();
} // 12345 → 5

// 3. Reverse array
void reverseArray(int[] arr) {
  int l = 0, r = arr.length - 1;
  while (l &lt; r) {
    int tmp = arr[l]; arr[l] = arr[r]; arr[r] = tmp;
    l++; r--;
  }
}

// 4. Anagram check
boolean isAnagram(String a, String b) {
  if (a.length() != b.length()) return false;
  int[] freq = new int[26];
  for (char c : a.toCharArray()) freq[c - 'a']++;
  for (char c : b.toCharArray()) freq[c - 'a']--;
  for (int f : freq) if (f != 0) return false;
  return true;
} // "listen" & "silent" → true

// 5. First and last occurrence
int[] firstLast(int[] arr, int target) {
  int first = -1, last = -1;
  for (int i = 0; i &lt; arr.length; i++) {
    if (arr[i] == target) {
      if (first == -1) first = i;
      last = i;
    }
  }
  return new int[]{first, last};
}</pre></div>
    </div>
  </div>
</div>

${quizHTML('java-core', [
  { q: "Why is Java not considered a pure OOP language?", opts: ["No inheritance support", "It has primitive types (int, char, etc.) that are not objects", "No polymorphism", "Static methods don't exist"], ans: 1, exp: "Pure OOP treats everything as an object. Java's primitives (int, char, boolean...) are not objects, which breaks purity. Wrapper classes (Integer, Character) provide object versions." },
  { q: "What is the String Pool?", opts: ["A thread pool for string operations", "A cache in the Heap where string literals are stored and reused", "Part of the Stack memory", "A collection class for strings"], ans: 1, exp: "The String Pool (interning pool) stores string literals in the Heap. When you write \"hello\", Java checks if it exists first. Same literals share the same reference, saving memory." },
  { q: "StringBuilder vs StringBuffer — key difference?", opts: ["StringBuilder is immutable", "StringBuffer is faster", "StringBuilder is NOT thread-safe, StringBuffer IS", "No difference"], ans: 2, exp: "StringBuilder is faster (no synchronization) but NOT thread-safe. StringBuffer is thread-safe (synchronized) but slower. Use StringBuilder in single-threaded contexts (most loops)." },
  { q: "What does volatile keyword guarantee?", opts: ["Atomicity of operations", "Visibility — all threads see the latest value, bypassing CPU cache", "Mutual exclusion like synchronized", "Immutability of the variable"], ans: 1, exp: "volatile ensures that writes to the variable are immediately visible to all threads. It prevents CPU from caching the value locally. It does NOT guarantee atomicity (use AtomicInteger for that)." }
])}`;

// ─── JAVA COLLECTIONS ────────────────────────────────────────────────────────
pages['java-collections'] = () => `
<div class="page-header">
  <div class="breadcrumb">Java</div>
  <h1 class="page-title">Collections Framework</h1>
  <p class="page-subtitle">The right data structure for the right job — with Java's built-in arsenal.</p>
  ${revisionControls('java-collections')}
</div>

<h2 class="section-title">Collections Hierarchy</h2>
<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;font-family:'DM Mono',monospace;font-size:12px;overflow-x:auto">
<pre style="color:var(--text)">Iterable
  └── Collection
        ├── List (ordered, duplicates ok)
        │     ├── ArrayList      O(1) get, O(n) add/remove middle
        │     ├── LinkedList     O(n) get, O(1) add/remove ends (also Deque)
        │     └── Vector         (legacy, synchronized)
        ├── Set (unique elements)
        │     ├── HashSet        O(1) ops, no order
        │     ├── LinkedHashSet  insertion order
        │     └── TreeSet        sorted, O(log n)
        └── Queue / Deque
              ├── PriorityQueue  min-heap by default
              ├── ArrayDeque     stack + queue, no nulls
              └── LinkedList     also implements Deque
Map (key-value, not a Collection)
  ├── HashMap         O(1) avg, no order
  ├── LinkedHashMap   insertion order
  ├── TreeMap         sorted by key, O(log n)
  └── ConcurrentHashMap  thread-safe, segment locking</pre>
</div>

<h2 class="section-title">Scenario-Based Interview Questions</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">When to use ArrayList vs LinkedList?</div>
    <div class="accordion-body">
      <table class="data-table">
        <tr><th>Operation</th><th>ArrayList</th><th>LinkedList</th></tr>
        <tr><td>get(i)</td><td>O(1) ✅</td><td>O(n) ❌</td></tr>
        <tr><td>add to end</td><td>O(1) amortized ✅</td><td>O(1) ✅</td></tr>
        <tr><td>add/remove middle</td><td>O(n) ❌ (shift)</td><td>O(1) ✅ (pointer)</td></tr>
        <tr><td>Memory</td><td>Less (array)</td><td>More (node + 2 pointers)</td></tr>
      </table>
      <div class="callout callout-green"><strong>Rule:</strong> Default to ArrayList. Use LinkedList only when you frequently add/remove at head or need Deque behavior.</div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">HashMap vs LinkedHashMap vs TreeMap</div>
    <div class="accordion-body">
      <div class="code-block"><pre>// HashMap — fastest, no guaranteed order
Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();

// LinkedHashMap — iteration in insertion order
Map&lt;String, Integer&gt; linked = new LinkedHashMap&lt;&gt;();
// Great for LRU cache (override removeEldestEntry)

// TreeMap — sorted by natural key order (or Comparator)
Map&lt;String, Integer&gt; tree = new TreeMap&lt;&gt;();
tree.put("banana", 2); tree.put("apple", 1);
// Iterates: apple, banana  (alphabetical)</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">How to sort a List? What about custom sort?</div>
    <div class="accordion-body">
      <div class="code-block"><pre>List&lt;Integer&gt; nums = Arrays.asList(3, 1, 4, 1, 5);
Collections.sort(nums);                   // ascending
Collections.sort(nums, Collections.reverseOrder());  // descending

// Custom sort by string length
List&lt;String&gt; words = Arrays.asList("banana", "fig", "apple");
words.sort(Comparator.comparingInt(String::length));
// ["fig", "apple", "banana"]

// Sort objects
List&lt;Employee&gt; emps = ...;
emps.sort(Comparator.comparing(Employee::getSalary)
                    .thenComparing(Employee::getName));</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Access Specifiers & Constructor Types</div>
    <div class="accordion-body">
      <table class="data-table">
        <tr><th>Modifier</th><th>Same Class</th><th>Same Package</th><th>Subclass</th><th>Anywhere</th></tr>
        <tr><td>private</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
        <tr><td>(default)</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr>
        <tr><td>protected</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td></tr>
        <tr><td>public</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
      </table>
      <div class="code-block"><pre>// Constructor types
class Person {
  String name;
  // 1. Default (no-arg)
  Person() { this.name = "Unknown"; }
  // 2. Parameterized
  Person(String name) { this.name = name; }
  // 3. Copy constructor
  Person(Person other) { this.name = other.name; }
}</pre></div>
    </div>
  </div>
</div>

${quizHTML('java-collections', [
  { q: "Which List gives O(1) random access?", opts: ["LinkedList", "ArrayList", "Both", "Neither"], ans: 1, exp: "ArrayList is backed by an array, so get(index) is O(1) — direct memory offset. LinkedList requires traversal from head: O(n)." },
  { q: "You need a Map that remembers insertion order — which one?", opts: ["HashMap", "TreeMap", "LinkedHashMap", "IdentityHashMap"], ans: 2, exp: "LinkedHashMap maintains insertion order by keeping a doubly-linked list alongside the hash table. Great for LRU caches. TreeMap maintains sorted key order, not insertion order." },
  { q: "Thread-safe Map without full synchronization?", opts: ["HashMap", "HashTable", "ConcurrentHashMap", "Collections.synchronizedMap"], ans: 2, exp: "ConcurrentHashMap uses segment-level locking (Java 7) / CAS + synchronized blocks (Java 8+), allowing concurrent reads and fine-grained writes. HashTable synchronizes every method — slow." }
])}`;

// ─── JAVA CONCURRENCY ────────────────────────────────────────────────────────
pages['java-concurrency'] = () => `
<div class="page-header">
  <div class="breadcrumb">Java</div>
  <h1 class="page-title">Multithreading & Concurrency</h1>
  <p class="page-subtitle">Thread lifecycle, synchronization, ExecutorService, and Java 21 virtual threads.</p>
  ${revisionControls('java-concurrency')}
</div>

<div class="elon-box">
  <strong>⚡ Mental Model:</strong> Threads share heap (objects, static fields) but each has its own stack (local vars, method calls). Race conditions happen when multiple threads modify shared state without coordination.
</div>

<h2 class="section-title">Thread Lifecycle</h2>
<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;overflow-x:auto">
<svg viewBox="0 0 700 120" style="width:100%;max-width:700px;display:block;margin:0 auto">
  <defs>
    <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/>
    </marker>
  </defs>
  <!-- states -->
  <rect x="10" y="40" width="90" height="36" rx="8" fill="#eef2ff" stroke="#2563eb"/>
  <text x="55" y="63" text-anchor="middle" font-size="11" font-weight="600" fill="#3730a3">NEW</text>
  <rect x="130" y="40" width="90" height="36" rx="8" fill="#eef2ff" stroke="#2563eb"/>
  <text x="175" y="63" text-anchor="middle" font-size="11" font-weight="600" fill="#3730a3">RUNNABLE</text>
  <rect x="250" y="40" width="90" height="36" rx="8" fill="#f0fdf4" stroke="#059669"/>
  <text x="295" y="63" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">RUNNING</text>
  <rect x="370" y="10" width="100" height="36" rx="8" fill="#fffbeb" stroke="#d97706"/>
  <text x="420" y="33" text-anchor="middle" font-size="11" font-weight="600" fill="#92400e">BLOCKED</text>
  <rect x="370" y="74" width="100" height="36" rx="8" fill="#fffbeb" stroke="#d97706"/>
  <text x="420" y="97" text-anchor="middle" font-size="11" font-weight="600" fill="#92400e">WAITING</text>
  <rect x="600" y="40" width="90" height="36" rx="8" fill="#fef2f2" stroke="#dc2626"/>
  <text x="645" y="63" text-anchor="middle" font-size="11" font-weight="600" fill="#991b1b">TERMINATED</text>
  <!-- arrows -->
  <line x1="100" y1="58" x2="128" y2="58" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="220" y1="58" x2="248" y2="58" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="340" y1="48" x2="368" y2="32" stroke="#d97706" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="340" y1="68" x2="368" y2="84" stroke="#d97706" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="470" y1="32" x2="290" y2="48" stroke="#d97706" stroke-width="1.2" stroke-dasharray="4" marker-end="url(#arr2)"/>
  <line x1="470" y1="84" x2="290" y2="68" stroke="#d97706" stroke-width="1.2" stroke-dasharray="4" marker-end="url(#arr2)"/>
  <line x1="340" y1="58" x2="598" y2="58" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arr2)"/>
  <text x="450" y="65" font-size="10" fill="#7a7065">run() done</text>
</svg>
</div>

<h2 class="section-title">Creating Threads</h2>
<div class="code-block"><pre>// Way 1: extend Thread
class MyThread extends Thread {
  public void run() { System.out.println("Thread: " + getName()); }
}
new MyThread().start();

// Way 2: implement Runnable (preferred — doesn't block inheritance)
Thread t = new Thread(() -> System.out.println("Lambda thread"));
t.start();

// Way 3: Callable + Future (returns result, can throw)
ExecutorService pool = Executors.newFixedThreadPool(4);
Future&lt;Integer&gt; future = pool.submit(() -> {
  Thread.sleep(100);
  return 42;
});
int result = future.get();  // blocks until done
pool.shutdown();</pre></div>

<h2 class="section-title">Synchronization</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">synchronized keyword</div>
    <div class="accordion-body">
      <div class="code-block"><pre>class BankAccount {
  private int balance = 1000;

  // Synchronized method — locks on 'this'
  public synchronized void withdraw(int amount) {
    if (balance &gt;= amount) balance -= amount;
  }

  // Synchronized block — finer control
  public void deposit(int amount) {
    synchronized (this) {
      balance += amount;
    }
  }
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">ReentrantLock — more control than synchronized</div>
    <div class="accordion-body">
      <div class="code-block"><pre>import java.util.concurrent.locks.ReentrantLock;

class SafeCounter {
  private final ReentrantLock lock = new ReentrantLock();
  private int count = 0;

  public void increment() {
    lock.lock();
    try {
      count++;
    } finally {
      lock.unlock();  // ALWAYS unlock in finally!
    }
  }

  // tryLock — don't block forever
  public boolean tryIncrement() {
    if (lock.tryLock()) {
      try { count++; return true; }
      finally { lock.unlock(); }
    }
    return false; // couldn't acquire lock
  }
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">wait() / notify() — thread communication</div>
    <div class="accordion-body">
      <div class="code-block"><pre>class SharedBuffer {
  private Queue&lt;Integer&gt; buffer = new LinkedList&lt;&gt;();
  private int capacity = 5;

  public synchronized void produce(int item) throws InterruptedException {
    while (buffer.size() == capacity) wait(); // release lock, wait
    buffer.add(item);
    notifyAll(); // wake waiting consumers
  }

  public synchronized int consume() throws InterruptedException {
    while (buffer.isEmpty()) wait();
    int item = buffer.poll();
    notifyAll(); // wake waiting producers
    return item;
  }
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Atomic classes & happens-before</div>
    <div class="accordion-body">
      <div class="code-block"><pre>import java.util.concurrent.atomic.*;

AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();      // thread-safe ++
counter.compareAndSet(5, 10);   // CAS: if value==5, set to 10

// AtomicReference for objects
AtomicReference&lt;String&gt; ref = new AtomicReference&lt;&gt;("old");
ref.compareAndSet("old", "new"); // lock-free update</pre></div>
    </div>
  </div>
</div>

<h2 class="section-title">ExecutorService & Thread Pools</h2>
<div class="code-block"><pre>// Fixed pool — good for CPU-bound work
ExecutorService pool = Executors.newFixedThreadPool(
    Runtime.getRuntime().availableProcessors());

// Cached pool — unbounded, good for short-lived I/O tasks
ExecutorService cached = Executors.newCachedThreadPool();

// Scheduled pool
ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);
scheduler.scheduleAtFixedRate(() -> System.out.println("tick"), 0, 1, TimeUnit.SECONDS);

// Structured concurrency with CompletableFuture
CompletableFuture&lt;String&gt; cf = CompletableFuture
  .supplyAsync(() -> fetchUser(id))
  .thenApply(user -> user.getName())
  .thenCompose(name -> lookupProfile(name))
  .exceptionally(ex -> "default");</pre></div>

<h2 class="section-title">Java 21 Virtual Threads (Project Loom)</h2>
<div class="callout callout-purple">
  <strong>Virtual threads</strong> are lightweight threads managed by the JVM (not OS). You can have <strong>millions</strong> of them. They're perfect for I/O-bound workloads (web servers, DB calls). Platform threads = OS threads = expensive (~1MB stack). Virtual threads = ~few KB.
</div>
<div class="code-block"><pre>// Java 21+
// Create a virtual thread
Thread vt = Thread.ofVirtual().start(() -> {
  System.out.println("Virtual thread: " + Thread.currentThread().isVirtual());
});

// Virtual thread executor — ideal for high-concurrency servers
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
  for (int i = 0; i &lt; 100_000; i++) {
    executor.submit(() -> doSomeIO());  // 100K concurrent tasks — no problem!
  }
}

// With structured concurrency (Java 21 preview)
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
  Future&lt;String&gt; user  = scope.fork(() -> fetchUser(id));
  Future&lt;String&gt; order = scope.fork(() -> fetchOrder(id));
  scope.join();           // wait for both
  scope.throwIfFailed();
  return new Result(user.resultNow(), order.resultNow());
}</pre></div>

${quizHTML('java-concurrency', [
  { q: "What's the difference between start() and run() on a Thread?", opts: ["No difference", "start() creates a new thread and calls run(); run() just executes in calling thread", "run() is deprecated", "start() is for Runnable only"], ans: 1, exp: "Calling run() directly executes in the CURRENT thread — no new thread created. You must call start() to spawn a new OS thread. This is a very common interview trap." },
  { q: "Why use ConcurrentHashMap over synchronized HashMap?", opts: ["ConcurrentHashMap is not thread-safe", "Segment-level locking allows concurrent reads & multiple writes", "No difference in Java 8+", "ConcurrentHashMap doesn't allow null"], ans: 1, exp: "ConcurrentHashMap uses striped locking — reads are lock-free, writes lock only the affected segment/bucket. Synchronized HashMap locks the entire map on every operation — much worse throughput." },
  { q: "Virtual threads (Java 21) are best for?", opts: ["CPU-intensive computation", "I/O-bound tasks like DB calls, HTTP requests", "GUI applications", "Real-time games"], ans: 1, exp: "Virtual threads shine for I/O-bound work because when a virtual thread blocks on I/O, the JVM unmounts it from the carrier (OS) thread, freeing it for other virtual threads. They don't help CPU-bound work." }
])}`;

// ─── JAVA STREAMS ────────────────────────────────────────────────────────────
pages['java-streams'] = () => `
<div class="page-header">
  <div class="breadcrumb">Java</div>
  <h1 class="page-title">Streams & Functional Programming</h1>
  <p class="page-subtitle">Java 8+ Streams: process collections declaratively with filter/map/reduce.</p>
  ${revisionControls('java-streams')}
</div>

<div class="elon-box">
  <strong>⚡ Key insight:</strong> Streams are lazy — nothing executes until a terminal operation. Intermediate ops build a pipeline. Terminal ops trigger execution. Streams are consumed once.
</div>

<h2 class="section-title">Stream Pipeline Anatomy</h2>
<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;margin:16px 0;overflow-x:auto">
<pre style="font-family:'DM Mono',monospace;font-size:13px;color:var(--text)">Source → [intermediate ops...] → terminal op
  ↓           ↓                        ↓
Collection  filter/map/sorted      collect/forEach/reduce
            (lazy, no execution)    (triggers execution)</pre>
</div>

<div class="code-block"><pre>List&lt;String&gt; names = List.of("Alice", "Bob", "Charlie", "Dave", "Anna");

// filter + map + collect
List&lt;String&gt; result = names.stream()
  .filter(n -> n.startsWith("A"))    // filter: Alice, Anna
  .map(String::toUpperCase)          // map: ALICE, ANNA
  .sorted()                          // ALICE, ANNA
  .collect(Collectors.toList());     // terminal: triggers execution

// forEach
names.stream().forEach(System.out::println);

// count
long count = names.stream().filter(n -> n.length() &gt; 3).count();

// findFirst / findAny
Optional&lt;String&gt; first = names.stream()
  .filter(n -> n.startsWith("A"))
  .findFirst();  // Optional&lt;String&gt;
first.ifPresent(System.out::println);</pre></div>

<h2 class="section-title">reduce & collect</h2>
<div class="code-block"><pre>List&lt;Integer&gt; numbers = List.of(1, 2, 3, 4, 5);

// reduce — fold all elements into one value
int sum = numbers.stream().reduce(0, Integer::sum);       // 15
int max = numbers.stream().reduce(Integer.MIN_VALUE, Math::max); // 5

// collect with Collectors
List&lt;Integer&gt; evens = numbers.stream()
  .filter(n -> n % 2 == 0)
  .collect(Collectors.toList());                          // [2, 4]

String joined = names.stream().collect(Collectors.joining(", ")); // "Alice, Bob, ..."

Map&lt;Integer, List&lt;String&gt;&gt; byLength = names.stream()
  .collect(Collectors.groupingBy(String::length));
// {3=[Bob], 4=[Dave, Anna], 5=[Alice], 7=[Charlie]}</pre></div>

<h2 class="section-title">flatMap, groupingBy, partitioningBy</h2>
<div class="code-block"><pre>// flatMap — flatten nested collections
List&lt;List&lt;Integer&gt;&gt; nested = List.of(List.of(1,2), List.of(3,4));
List&lt;Integer&gt; flat = nested.stream()
  .flatMap(List::stream)
  .collect(Collectors.toList());    // [1, 2, 3, 4]

// groupingBy
Map&lt;String, Long&gt; countByDept = employees.stream()
  .collect(Collectors.groupingBy(Employee::getDept, Collectors.counting()));

// partitioningBy — splits into true/false groups
Map&lt;Boolean, List&lt;Integer&gt;&gt; oddEven = numbers.stream()
  .collect(Collectors.partitioningBy(n -> n % 2 == 0));
// {false=[1,3,5], true=[2,4]}</pre></div>

<h2 class="section-title">Parallel Streams</h2>
<div class="callout callout-amber">
  <strong>Use parallel streams carefully.</strong> They use the ForkJoinPool. Overhead of splitting/merging can outweigh benefits for small collections. Best for large datasets with CPU-intensive, stateless operations.
</div>
<div class="code-block"><pre>// Just add .parallel() or use parallelStream()
long count = largeList.parallelStream()
  .filter(item -> expensiveCheck(item))
  .count();

// DON'T use parallel for I/O-bound or stateful operations
// DON'T use when order matters (unless you use forEachOrdered)
// DO use for large collections with CPU-heavy, independent operations</pre></div>

<h2 class="section-title">Optional — avoiding NullPointerException</h2>
<div class="code-block"><pre>Optional&lt;String&gt; opt = Optional.ofNullable(getName()); // might be null

opt.isPresent();                    // check
opt.get();                          // get (throws if empty)
opt.orElse("default");             // safe fallback
opt.orElseGet(() -> computeDefault()); // lazy fallback
opt.orElseThrow(() -> new RuntimeException("Not found"));
opt.map(String::toUpperCase)        // transform if present
   .filter(s -> s.length() &gt; 3)
   .ifPresent(System.out::println);</pre></div>

${quizHTML('java-streams', [
  { q: "Streams are ___?", opts: ["Eager — execute immediately", "Lazy — execute only when terminal op is called", "Always parallel", "Reusable after terminal op"], ans: 1, exp: "Stream operations are lazy. filter(), map() etc. just build the pipeline but execute nothing. Only terminal operations (collect, count, forEach, reduce) trigger the pipeline. Streams can only be consumed once." },
  { q: "What does flatMap do?", opts: ["Same as map but faster", "Flattens nested collections/streams into one stream", "Maps and filters simultaneously", "Reverses the stream"], ans: 1, exp: "flatMap transforms each element into a Stream, then flattens all those streams into one. Perfect for List<List<T>> → List<T>, or when map would return Stream<Stream<T>>." },
  { q: "groupingBy returns?", opts: ["List", "Set", "Map<K, List<T>>", "Optional"], ans: 2, exp: "Collectors.groupingBy(classifier) returns a Map where keys are the classifier values and values are Lists of elements with that key. You can further transform with a downstream collector." }
])}`;

// ─── JAVA MEMORY ─────────────────────────────────────────────────────────────
pages['java-memory'] = () => `
<div class="page-header">
  <div class="breadcrumb">Java</div>
  <h1 class="page-title">Memory Management & JVM</h1>
  <p class="page-subtitle">Heap, Stack, Metaspace, GC algorithms, and String Pool internals.</p>
  ${revisionControls('java-memory')}
</div>

<h2 class="section-title">JVM Memory Regions</h2>
<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;margin:16px 0">
<svg viewBox="0 0 680 280" style="width:100%;max-width:680px;display:block;margin:0 auto">
  <!-- Heap -->
  <rect x="10" y="10" width="280" height="260" rx="10" fill="#eef2ff" stroke="#2563eb" stroke-width="2"/>
  <text x="150" y="32" text-anchor="middle" font-size="13" font-weight="700" fill="#1e40af">HEAP (shared)</text>
  <!-- Young Gen -->
  <rect x="20" y="45" width="260" height="70" rx="6" fill="#dbeafe" stroke="#3b82f6"/>
  <text x="150" y="62" text-anchor="middle" font-size="11" font-weight="600" fill="#1d4ed8">Young Generation</text>
  <rect x="30" y="68" width="70" height="36" rx="4" fill="#93c5fd"/>
  <text x="65" y="90" text-anchor="middle" font-size="10" fill="#1e3a8a">Eden</text>
  <rect x="110" y="68" width="70" height="36" rx="4" fill="#bfdbfe"/>
  <text x="145" y="90" text-anchor="middle" font-size="10" fill="#1e3a8a">S0</text>
  <rect x="190" y="68" width="70" height="36" rx="4" fill="#bfdbfe"/>
  <text x="225" y="90" text-anchor="middle" font-size="10" fill="#1e3a8a">S1</text>
  <!-- Old Gen -->
  <rect x="20" y="125" width="260" height="50" rx="6" fill="#c7d2fe" stroke="#6366f1"/>
  <text x="150" y="155" text-anchor="middle" font-size="11" font-weight="600" fill="#3730a3">Old Generation (Tenured)</text>
  <!-- String Pool -->
  <rect x="20" y="185" width="120" height="36" rx="6" fill="#dcfce7" stroke="#16a34a"/>
  <text x="80" y="208" text-anchor="middle" font-size="10" font-weight="600" fill="#14532d">String Pool</text>
  <!-- Objects -->
  <rect x="150" y="185" width="130" height="36" rx="6" fill="#fef9c3" stroke="#ca8a04"/>
  <text x="215" y="208" text-anchor="middle" font-size="10" font-weight="600" fill="#713f12">Objects/Arrays</text>
  <!-- Stack -->
  <rect x="310" y="10" width="170" height="260" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text x="395" y="32" text-anchor="middle" font-size="13" font-weight="700" fill="#92400e">STACK (per thread)</text>
  <rect x="320" y="45" width="150" height="40" rx="5" fill="#fde68a" stroke="#f59e0b"/>
  <text x="395" y="70" text-anchor="middle" font-size="11" fill="#78350f">Frame: main()</text>
  <rect x="320" y="95" width="150" height="40" rx="5" fill="#fde68a" stroke="#f59e0b"/>
  <text x="395" y="120" text-anchor="middle" font-size="11" fill="#78350f">Frame: foo()</text>
  <rect x="320" y="145" width="150" height="40" rx="5" fill="#fef3c7" stroke="#f59e0b" stroke-dasharray="4"/>
  <text x="395" y="170" text-anchor="middle" font-size="11" fill="#d97706">local vars + refs</text>
  <!-- Metaspace -->
  <rect x="500" y="10" width="170" height="130" rx="10" fill="#fae8ff" stroke="#a855f7" stroke-width="2"/>
  <text x="585" y="32" text-anchor="middle" font-size="13" font-weight="700" fill="#6b21a8">METASPACE</text>
  <text x="585" y="55" text-anchor="middle" font-size="11" fill="#7e22ce">Class metadata</text>
  <text x="585" y="75" text-anchor="middle" font-size="11" fill="#7e22ce">Method info</text>
  <text x="585" y="95" text-anchor="middle" font-size="11" fill="#7e22ce">Static fields</text>
  <text x="585" y="115" text-anchor="middle" font-size="11" fill="#7e22ce">(native memory)</text>
  <!-- Code Cache -->
  <rect x="500" y="155" width="170" height="115" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
  <text x="585" y="177" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">CODE CACHE</text>
  <text x="585" y="200" text-anchor="middle" font-size="11" fill="#047857">JIT-compiled code</text>
  <text x="585" y="220" text-anchor="middle" font-size="11" fill="#047857">Interpreter stubs</text>
</svg>
</div>

<div class="callout callout-blue">
  <strong>Stack vs Heap:</strong> Stack stores primitives and object references (not the objects). Heap stores actual objects. Each thread has its own stack. All threads share the heap. Stack is auto-managed (LIFO); Heap is GC-managed.
</div>

<h2 class="section-title">Garbage Collection Algorithms</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Young Generation GC (Minor GC)</div>
    <div class="accordion-body">
      <p>New objects go to <strong>Eden</strong>. When Eden is full, a Minor GC runs. Surviving objects move to Survivor space (S0 or S1). After enough GC cycles, objects are promoted to <strong>Old Gen</strong>.</p>
      <div class="callout callout-green">Minor GC is fast (small area). Most objects die young — "infant mortality" principle.</div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">GC Collectors</div>
    <div class="accordion-body">
      <table class="data-table">
        <tr><th>Collector</th><th>Pauses</th><th>Best For</th></tr>
        <tr><td>Serial GC</td><td>Full stop-the-world</td><td>Single-core, small heaps</td></tr>
        <tr><td>Parallel GC</td><td>Multi-threaded STW</td><td>Throughput-optimized</td></tr>
        <tr><td>G1 GC (default Java 9+)</td><td>Short, predictable</td><td>Balanced latency/throughput</td></tr>
        <tr><td>ZGC / Shenandoah</td><td>&lt;1ms, concurrent</td><td>Low-latency apps (Java 15+)</td></tr>
      </table>
      <div class="code-block"><pre>// JVM flags to tune GC
-XX:+UseG1GC                     // use G1 (usually default)
-Xms512m -Xmx4g                  // min/max heap
-XX:MaxGCPauseMillis=200         // target max pause
-XX:+UseZGC                      // use ZGC (ultra-low latency)</pre></div>
    </div>
  </div>
</div>

<h2 class="section-title">Common Memory Issues</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Memory Leak patterns in Java</div>
    <div class="accordion-body">
      <div class="code-block"><pre>// 1. Static collections growing forever
static List&lt;Object&gt; cache = new ArrayList&lt;&gt;(); // never GC'd

// 2. Not closing resources
Connection conn = getConnection(); // if never closed → leak
// Fix: try-with-resources
try (Connection conn = getConnection()) { ... }

// 3. Listeners never removed
button.addActionListener(listener); // listener holds reference
// Fix: removeActionListener when done

// 4. ThreadLocal not cleaned up in thread pools
ThreadLocal&lt;Context&gt; tl = new ThreadLocal&lt;&gt;();
// Fix: tl.remove() after use in finally block</pre></div>
    </div>
  </div>
</div>

${quizHTML('java-memory', [
  { q: "Where are objects stored in Java?", opts: ["Stack", "Heap", "Metaspace", "Code Cache"], ans: 1, exp: "Objects (created with new) are stored in the Heap. The Stack only stores primitive values and object references (pointers to heap objects). Each thread has its own Stack, but all share the Heap." },
  { q: "What was PermGen replaced with in Java 8?", opts: ["Code Cache", "Old Generation", "Metaspace", "Young Generation"], ans: 2, exp: "PermGen (Permanent Generation) was replaced by Metaspace in Java 8. Key difference: Metaspace uses native memory (not the JVM heap), so it auto-grows by default and reduces OutOfMemoryError from PermGen." },
  { q: "G1 GC advantage over Parallel GC?", opts: ["Higher throughput", "Lower and more predictable GC pauses", "Works on single core", "No stop-the-world pauses"], ans: 1, exp: "G1 (Garbage First) targets predictable pause times (configurable with -XX:MaxGCPauseMillis). Parallel GC maximizes throughput but pauses can be long. G1 is default since Java 9." }
])}`;

// ─── SPRING ──────────────────────────────────────────────────────────────────
pages['spring-core'] = () => `
<div class="page-header">
  <div class="breadcrumb">Spring</div>
  <h1 class="page-title">Spring Boot Core</h1>
  <p class="page-subtitle">IoC, DI, AOP, Transactions, JPA, and REST API design.</p>
  ${revisionControls('spring-core')}
</div>

<div class="elon-box">
  <strong>⚡ Spring in one line:</strong> Spring manages your object lifecycle (IoC) and wires dependencies (DI) so you focus on business logic, not plumbing.
</div>

<h2 class="section-title">Auto-Configuration & Embedded Server</h2>
<div class="callout callout-blue">
  <code>@SpringBootApplication</code> = <code>@Configuration</code> + <code>@EnableAutoConfiguration</code> + <code>@ComponentScan</code>. Auto-config reads <code>spring.factories</code> and configures beans based on classpath + properties. Add <code>spring-boot-starter-web</code> → Tomcat starts automatically on port 8080.
</div>
<div class="code-block"><pre>@SpringBootApplication
public class App {
  public static void main(String[] args) {
    SpringApplication.run(App.class, args);
    // 1. Creates ApplicationContext
    // 2. Auto-configures beans from classpath
    // 3. Starts embedded Tomcat (if web starter present)
    // 4. Scans @Component, @Service, @Repository, @Controller
  }
}</pre></div>

<h2 class="section-title">IoC & Dependency Injection</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">What is IoC? What is DI?</div>
    <div class="accordion-body">
      <p><strong>IoC (Inversion of Control):</strong> You don't create objects — the framework creates and manages them. Control inverted from your code to Spring container.</p>
      <p><strong>DI (Dependency Injection):</strong> Spring injects dependencies into your class instead of you calling <code>new</code>.</p>
      <div class="code-block"><pre>// Without DI (tight coupling)
class OrderService {
  PaymentService ps = new PaymentService(); // you control it
}

// With DI (loose coupling)
@Service
class OrderService {
  private final PaymentService ps;

  @Autowired  // Spring injects PaymentService bean
  OrderService(PaymentService ps) { this.ps = ps; }
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">3 Types of Injection — which to prefer?</div>
    <div class="accordion-body">
      <div class="code-block"><pre>// 1. Constructor Injection (PREFERRED ✅)
@Service
class UserService {
  private final UserRepository repo;  // final = immutable
  UserService(UserRepository repo) { this.repo = repo; }
  // Benefits: immutable, testable, fail-fast, no circular deps
}

// 2. Setter Injection (use for optional deps)
@Autowired
public void setRepo(UserRepository repo) { this.repo = repo; }

// 3. Field Injection (avoid in prod code ❌)
@Autowired
private UserRepository repo;  // can't test without Spring, not final</pre></div>
      <div class="callout callout-green"><strong>Always use constructor injection</strong> in production code. It makes dependencies explicit, enables immutability, and works without Spring in tests.</div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Bean Lifecycle & Scopes</div>
    <div class="accordion-body">
      <div class="code-block"><pre>// Lifecycle hooks
@Component
class MyBean {
  @PostConstruct
  void init() { /* runs after DI — setup */ }

  @PreDestroy
  void cleanup() { /* runs before container shutdown */ }
}

// Scopes
@Scope("singleton")  // DEFAULT: one instance per container
@Scope("prototype")  // new instance every @Autowired
@Scope("request")    // one per HTTP request (web)
@Scope("session")    // one per HTTP session (web)

// Conditional beans
@Bean
@ConditionalOnProperty(name = "feature.enabled", havingValue = "true")
DataSource dataSource() { return new HikariDataSource(); }</pre></div>
    </div>
  </div>
</div>

<h2 class="section-title">AOP — Aspect Oriented Programming</h2>
<div class="callout callout-amber">
  AOP handles <strong>cross-cutting concerns</strong> (logging, security, transactions, caching) without polluting business code. Spring uses proxies under the hood.
</div>
<div class="code-block"><pre>@Aspect
@Component
public class LoggingAspect {

  // Pointcut: all methods in service package
  @Around("execution(* com.example.service.*.*(..))")
  public Object logTime(ProceedingJoinPoint pjp) throws Throwable {
    long start = System.currentTimeMillis();
    try {
      Object result = pjp.proceed();  // call actual method
      long duration = System.currentTimeMillis() - start;
      log.info("{} took {}ms", pjp.getSignature(), duration);
      return result;
    } catch (Exception e) {
      log.error("Exception in {}", pjp.getSignature(), e);
      throw e;
    }
  }

  // Before, After, AfterReturning, AfterThrowing also available
  @Before("@annotation(com.example.RequiresAuth)")
  public void checkAuth(JoinPoint jp) {
    // runs before any @RequiresAuth method
  }
}</pre></div>

<h2 class="section-title">@Transactional</h2>
<div class="code-block"><pre>@Service
public class BankService {

  @Transactional  // begins txn before, commits after, rolls back on exception
  public void transfer(Long from, Long to, BigDecimal amount) {
    accountRepo.debit(from, amount);
    accountRepo.credit(to, amount);
    // if credit throws → entire txn rolled back
  }

  // Propagation
  @Transactional(propagation = Propagation.REQUIRED)    // join existing or new (default)
  @Transactional(propagation = Propagation.REQUIRES_NEW)// always new txn
  @Transactional(propagation = Propagation.SUPPORTS)   // use if exists, else no txn

  // Isolation
  @Transactional(isolation = Isolation.READ_COMMITTED)  // default in most DBs
  @Transactional(isolation = Isolation.SERIALIZABLE)    // strictest, slowest

  // Read-only optimization
  @Transactional(readOnly = true)
  public List&lt;Account&gt; getAll() { return repo.findAll(); }
}</pre></div>

<h2 class="section-title">JPA & Spring Data</h2>
<div class="code-block"><pre>@Entity
@Table(name = "users")
public class User {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private List&lt;Order&gt; orders;
}

// Spring Data Repository — zero boilerplate
public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
  List&lt;User&gt; findByName(String name);                    // derived query
  @Query("SELECT u FROM User u WHERE u.email = :email") // JPQL
  Optional&lt;User&gt; findByEmail(@Param("email") String email);
  @Query(value = "SELECT * FROM users WHERE status = ?1", nativeQuery = true)
  List&lt;User&gt; findActiveNative(String status);
}

// Service usage
@Service
@RequiredArgsConstructor
class UserService {
  private final UserRepository repo;

  public User save(User u) { return repo.save(u); }
  public Optional&lt;User&gt; find(Long id) { return repo.findById(id); }
}</pre></div>

<h2 class="section-title">REST — PATCH vs PUT vs POST</h2>
<table class="data-table">
  <tr><th>Method</th><th>Action</th><th>Idempotent?</th><th>Body?</th><th>Example</th></tr>
  <tr><td>POST</td><td>Create new resource</td><td>No</td><td>Yes</td><td>POST /users</td></tr>
  <tr><td>PUT</td><td>Replace entire resource</td><td>Yes</td><td>Yes (full)</td><td>PUT /users/1</td></tr>
  <tr><td>PATCH</td><td>Partial update</td><td>Usually</td><td>Yes (partial)</td><td>PATCH /users/1</td></tr>
  <tr><td>GET</td><td>Read</td><td>Yes</td><td>No</td><td>GET /users/1</td></tr>
  <tr><td>DELETE</td><td>Delete</td><td>Yes</td><td>No</td><td>DELETE /users/1</td></tr>
</table>

<h2 class="section-title">Resilience4j — Circuit Breaker</h2>
<div class="code-block"><pre>@Service
public class PaymentService {

  @CircuitBreaker(name = "payment", fallbackMethod = "paymentFallback")
  @Retry(name = "payment", fallbackMethod = "paymentFallback")
  public String processPayment(Order order) {
    return externalPaymentApi.charge(order);  // might fail
  }

  // Fallback when circuit is OPEN or all retries exhausted
  public String paymentFallback(Order order, Exception e) {
    log.warn("Payment service down, queuing for retry");
    queueService.enqueue(order);
    return "QUEUED";
  }
}
// application.yml:
// resilience4j.circuitbreaker.instances.payment.failureRateThreshold: 50
// resilience4j.circuitbreaker.instances.payment.waitDurationInOpenState: 10s</pre></div>

${quizHTML('spring-core', [
  { q: "What does @SpringBootApplication do?", opts: ["Only starts the server", "Combines @Configuration + @EnableAutoConfiguration + @ComponentScan", "Enables JPA only", "Replaces all other annotations"], ans: 1, exp: "@SpringBootApplication is a convenience annotation combining three: @Configuration (defines beans), @EnableAutoConfiguration (classpath-based auto-config), and @ComponentScan (scans for @Component etc.)." },
  { q: "Why prefer constructor injection over field injection?", opts: ["Field injection is deprecated", "Constructor injection enables immutability, explicit deps, and testability without Spring", "They're equivalent", "Constructor injection is faster at runtime"], ans: 1, exp: "Constructor injection: fields can be final (immutable), dependencies are explicit in the signature, you can test with plain new (no Spring needed), and circular dependency is caught at startup, not runtime." },
  { q: "What does @Transactional(readOnly=true) do?", opts: ["Prevents all writes permanently", "Hints to the DB/ORM to optimize for read (no dirty checking, potential read replica routing)", "Throws exception on any write", "Same as no annotation"], ans: 1, exp: "readOnly=true disables Hibernate dirty checking (no flush at commit), allows JPA providers to optimize. Some configurations also route to read replicas. It's a performance hint, not a hard constraint." }
])}`;

// ─── GO ──────────────────────────────────────────────────────────────────────
pages['go-core'] = () => `
<div class="page-header">
  <div class="breadcrumb">Go</div>
  <h1 class="page-title">Go Concurrency</h1>
  <p class="page-subtitle">Goroutines, channels, select, WaitGroup — Go's concurrency model explained.</p>
  ${revisionControls('go-core')}
</div>

<div class="elon-box">
  <strong>⚡ Go's concurrency mantra:</strong> "Don't communicate by sharing memory; share memory by communicating." — Use channels to pass data between goroutines instead of shared variables + locks.
</div>

<h2 class="section-title">Goroutines</h2>
<div class="callout callout-blue">
  A goroutine is a lightweight thread managed by the Go runtime. ~2KB stack (grows as needed). You can have <strong>millions</strong> simultaneously. The Go scheduler multiplexes goroutines onto OS threads (M:N model).
</div>
<div class="code-block"><pre>package main
import "fmt"

func sayHello(name string) {
    fmt.Println("Hello", name)
}

func main() {
    go sayHello("Alice")  // launches goroutine — doesn't block
    go sayHello("Bob")

    // main goroutine might exit before goroutines run!
    // Need sync mechanism: WaitGroup, channel, or time.Sleep (bad)
}</pre></div>

<h2 class="section-title">Channels</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Unbuffered Channels — synchronization point</div>
    <div class="accordion-body">
      <div class="code-block"><pre>ch := make(chan int)  // unbuffered

// Sender blocks until receiver is ready
go func() {
    ch &lt;- 42  // blocks here until someone reads
}()

val := &lt;-ch   // blocks until sender sends
fmt.Println(val)  // 42

// Pattern: use channel as done signal
done := make(chan struct{})
go func() {
    doWork()
    close(done)  // signal completion
}()
&lt;-done  // wait for goroutine to finish</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Buffered Channels — async queue</div>
    <div class="accordion-body">
      <div class="code-block"><pre>ch := make(chan int, 3)  // buffer size 3

ch &lt;- 1   // doesn't block (buffer has space)
ch &lt;- 2
ch &lt;- 3
// ch &lt;- 4  // would block! buffer full

val := &lt;-ch  // 1 (FIFO)

// Range over channel
jobs := make(chan int, 5)
for i := 0; i &lt; 5; i++ { jobs &lt;- i }
close(jobs)  // MUST close to stop range

for job := range jobs {
    fmt.Println("Processing job", job)
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">select — multiplex channels</div>
    <div class="accordion-body">
      <div class="code-block"><pre>// select is like switch but for channels
ch1 := make(chan string)
ch2 := make(chan string)

go func() { time.Sleep(1*time.Second); ch1 &lt;- "one" }()
go func() { time.Sleep(2*time.Second); ch2 &lt;- "two" }()

// Handle whichever arrives first
for i := 0; i &lt; 2; i++ {
    select {
    case msg := &lt;-ch1:
        fmt.Println("Received from ch1:", msg)
    case msg := &lt;-ch2:
        fmt.Println("Received from ch2:", msg)
    case &lt;-time.After(3 * time.Second):
        fmt.Println("Timeout!")
    }
}

// Non-blocking with default
select {
case msg := &lt;-ch1:
    fmt.Println(msg)
default:
    fmt.Println("No message, continuing") // runs immediately if ch1 empty
}</pre></div>
    </div>
  </div>
</div>

<h2 class="section-title">sync.WaitGroup — wait for goroutines</h2>
<div class="code-block"><pre>import "sync"

func main() {
    var wg sync.WaitGroup
    results := make([]int, 5)

    for i := 0; i &lt; 5; i++ {
        wg.Add(1)  // increment counter BEFORE goroutine
        go func(i int) {
            defer wg.Done()  // decrement when done (in defer for safety)
            results[i] = i * i
        }(i)  // pass i as param — avoid closure capture bug!
    }

    wg.Wait()  // block until all goroutines call Done()
    fmt.Println(results)  // [0, 1, 4, 9, 16]
}</pre></div>

<h2 class="section-title">Context — cancellation & timeouts</h2>
<div class="code-block"><pre>import "context"

func fetchData(ctx context.Context, url string) ([]byte, error) {
    req, _ := http.NewRequestWithContext(ctx, "GET", url, nil)
    resp, err := http.DefaultClient.Do(req)
    // If ctx is cancelled, Do returns immediately with ctx.Err()
    if err != nil { return nil, err }
    defer resp.Body.Close()
    return io.ReadAll(resp.Body)
}

func main() {
    // Cancel after 2 seconds
    ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
    defer cancel()  // ALWAYS defer cancel to release resources

    data, err := fetchData(ctx, "https://api.example.com")
    if err != nil {
        if err == context.DeadlineExceeded {
            fmt.Println("Request timed out")
        }
    }
}</pre></div>

<h2 class="section-title">Common Goroutine Patterns & Leak Prevention</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Fan-out / Fan-in</div>
    <div class="accordion-body">
      <div class="code-block"><pre>// Fan-out: distribute work across goroutines
func fanOut(input &lt;-chan int, workers int) []&lt;-chan int {
    channels := make([]&lt;-chan int, workers)
    for i := range channels {
        channels[i] = worker(input)
    }
    return channels
}

// Fan-in: merge multiple channels into one
func fanIn(channels ...&lt;-chan int) &lt;-chan int {
    out := make(chan int)
    var wg sync.WaitGroup
    for _, ch := range channels {
        wg.Add(1)
        go func(c &lt;-chan int) {
            defer wg.Done()
            for v := range c { out &lt;- v }
        }(ch)
    }
    go func() { wg.Wait(); close(out) }()
    return out
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Goroutine Leak — the silent bug</div>
    <div class="accordion-body">
      <div class="code-block"><pre>// LEAK: goroutine blocks forever on channel, nothing to read it
func leak() {
    ch := make(chan int)
    go func() {
        ch &lt;- 1  // blocks forever if nobody reads
    }()
    // ch is not read — goroutine leaks
}

// FIX 1: always have a reader
// FIX 2: use context cancellation
func noLeak(ctx context.Context) {
    ch := make(chan int, 1)  // buffered so sender doesn't block
    go func() {
        select {
        case ch &lt;- heavyWork():
        case &lt;-ctx.Done():  // bail out if cancelled
            return
        }
    }()
}

// FIX 3: close channel when done
// Use goleak in tests: goleak.VerifyNone(t)</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">defer — cleanup guarantee</div>
    <div class="accordion-body">
      <div class="code-block"><pre>func processFile(name string) error {
    f, err := os.Open(name)
    if err != nil { return err }
    defer f.Close()  // ALWAYS runs when function returns, even on panic

    mu.Lock()
    defer mu.Unlock()  // stack order: Unlock runs before Close

    // multiple defers are LIFO
    defer fmt.Println("third")
    defer fmt.Println("second")
    defer fmt.Println("first")  // prints first
}</pre></div>
    </div>
  </div>
</div>

${quizHTML('go-core', [
  { q: "What is a goroutine?", opts: ["An OS thread", "A lightweight thread managed by Go runtime (~2KB initial stack)", "A coroutine with manual scheduling", "A Go module"], ans: 1, exp: "Goroutines are lightweight, ~2KB initial stack (grows as needed), managed by Go's scheduler. Millions can coexist. The Go scheduler (GOMAXPROCS) multiplexes them onto OS threads (M:N model)." },
  { q: "Unbuffered channel behavior when sender sends:", opts: ["Sends and continues immediately", "Blocks until a receiver is ready (synchronization point)", "Panics if no receiver", "Drops the value"], ans: 1, exp: "Unbuffered channels synchronize: send blocks until receive happens, and receive blocks until send happens. This makes them perfect for rendezvous-style goroutine coordination." },
  { q: "How to prevent goroutine leaks?", opts: ["Use buffered channels", "Pass context and listen to ctx.Done(), or ensure channels always have readers", "Call runtime.GC()", "Use sync.Once"], ans: 1, exp: "Goroutines leak when they block forever — waiting on a channel nobody writes to, or waiting on a lock nobody releases. Pass context.Context for cancellation signals, and always ensure goroutines have an exit path." }
])}`;
