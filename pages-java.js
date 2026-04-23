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

<h2 class="section-title">Java Platform — JDK, JRE, JVM</h2>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:14px 0">
  <div style="background:#eef2ff;border:2px solid #2563eb;border-radius:10px;padding:14px;text-align:center">
    <div style="font-weight:700;font-size:15px;color:#1e40af;margin-bottom:6px">JDK</div>
    <div style="font-size:13px;color:#374151;line-height:1.8">Java Development Kit<br>Compiler (javac) + tools + JRE<br><strong>You code with this</strong></div>
  </div>
  <div style="background:#f0fdf4;border:2px solid #16a34a;border-radius:10px;padding:14px;text-align:center">
    <div style="font-weight:700;font-size:15px;color:#065f46;margin-bottom:6px">JRE</div>
    <div style="font-size:13px;color:#374151;line-height:1.8">Java Runtime Environment<br>Libraries + JVM<br><strong>You run apps with this</strong></div>
  </div>
  <div style="background:#fff7ed;border:2px solid #ea580c;border-radius:10px;padding:14px;text-align:center">
    <div style="font-weight:700;font-size:15px;color:#c2410c;margin-bottom:6px">JVM</div>
    <div style="font-size:13px;color:#374151;line-height:1.8">Java Virtual Machine<br>.java → bytecode → JVM executes<br><strong>Platform independence</strong></div>
  </div>
</div>
<div class="callout callout-blue">
  <strong>Key distinction:</strong> JDK ⊃ JRE ⊃ JVM. You write code with JDK, ship apps with JRE, and JVM is the engine that runs bytecode on any OS. Java is not purely OOP — it has primitives (int, boolean) for performance, with wrapper classes (Integer, Boolean) when objects are needed.
</div>

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
  { q: "Why is Java not pure OOP?", opts: ["No polymorphism", "No inheritance support", "Static methods don't exist", "Primitive types (int, char, boolean...) are not objects"], ans: 3, exp: "Pure OOP treats everything as an object. Java's primitives (int, char, boolean, double...) are not objects — they're value types for performance. Wrapper classes (Integer, Character) provide object versions with autoboxing." },
  { q: "String Pool — what does 'hello' == 'hello' evaluate to?", opts: ["Depends on JVM version", "false always", "Compile error", "true — both literals reference the same interned string in the pool"], ans: 3, exp: "String literals are interned: 'hello' == 'hello' is true because both point to the same pool object. But new String('hello') == 'hello' is false — new creates a heap object outside the pool. Always use .equals() for value comparison." },
  { q: "Why are Strings immutable in Java?", opts: ["Java limitation", "Thread safety, String Pool sharing, hashCode caching, security (class loading, passwords)", "Performance only", "Strings can be mutable"], ans: 1, exp: "4 reasons: 1) Thread-safe without sync (multiple threads can share same reference), 2) String Pool works (shared refs safe), 3) hashCode computed once and cached (HashMap key performance), 4) Security (class names, network connections can't be altered)." },
  { q: "StringBuilder vs StringBuffer — key difference?", opts: ["StringBuilder is NOT thread-safe (faster); StringBuffer IS thread-safe (synchronized, slower)", "StringBuffer is deprecated", "StringBuilder is immutable", "No difference"], ans: 0, exp: "StringBuffer: all methods synchronized — safe for multi-thread but slow. StringBuilder: no synchronization — fast, use in single-threaded code (loops, building responses). StringBuilder replaced StringBuffer in almost all practical cases." },
  { q: "Abstract class vs Interface — when to choose abstract class?", opts: ["Abstract classes are faster", "When you have shared state (fields), shared implementation, or constructor logic needed by subclasses", "Always use interface", "When you need multiple inheritance"], ans: 1, exp: "Use abstract class: sharing code/state among related classes (e.g., Animal with fields name/age + abstract sound()). Use interface: defining a contract/capability that unrelated classes implement (Comparable, Runnable, Serializable)." },
  { q: "volatile keyword guarantees?", opts: ["Visibility — all threads see the latest value immediately, bypassing CPU cache", "Atomicity of compound operations", "Mutual exclusion", "Immutability"], ans: 0, exp: "volatile ensures writes are immediately visible to all threads (bypasses CPU L1/L2 cache). Does NOT guarantee atomicity — volatile int count; count++ is still not thread-safe (read-modify-write is 3 ops). Use AtomicInteger for atomic increments." },
  { q: "final, finally, finalize — what does finalize() do?", opts: ["Called by GC before object is collected — deprecated in Java 9, removed use in Java 18", "Closes resources like try-with-resources", "Terminates the JVM", "Marks method as constant"], ans: 0, exp: "finalize(): GC calls it before reclaiming object — unpredictable timing, may never be called. Deprecated Java 9+, effectively removed. Use Cleaner/PhantomReference or try-with-resources instead. final=constant/no-override. finally=always runs in try-catch." },
  { q: "Aggregation vs Composition — what's the key distinction?", opts: ["Composition is always one-to-many", "They are the same", "Aggregation uses interfaces", "Composition: child cannot exist without parent (owned). Aggregation: child can exist independently (associated)"], ans: 3, exp: "Composition (strong): Car owns Engine — Engine dies with Car. Aggregation (weak): School has Teachers — Teacher exists independently and can belong to another School. In code: composition uses direct field instantiation, aggregation uses constructor injection." },
  { q: "Can you overload the main() method?", opts: ["No — only one main allowed", "Yes — but JVM only calls main(String[] args); other signatures are valid methods ignored by JVM launcher", "Only in Java 11+", "Yes, JVM calls all of them"], ans: 1, exp: "You can have public static void main(int x) or public static void main(String a, String b) — these are valid overloaded methods. The JVM launcher specifically calls main(String[]) only. Other signatures are never called automatically." }
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
  { q: "ArrayList.get(i) vs LinkedList.get(i) complexity?", opts: ["Both O(1)", "Both O(n)", "Depends on size", "ArrayList O(1) via direct index; LinkedList O(n) via traversal"], ans: 3, exp: "ArrayList backed by array: direct index = O(1). LinkedList: must traverse from head to index i = O(n). Choose ArrayList for random access, LinkedList for frequent insertions at head or Deque behavior." },
  { q: "Which Map preserves insertion order?", opts: ["HashMap", "TreeMap", "ConcurrentHashMap", "LinkedHashMap"], ans: 3, exp: "LinkedHashMap maintains insertion order via a doubly-linked list of entries. The accessOrder=true variant maintains access order for LRU caches. TreeMap maintains sorted key order. HashMap has no guaranteed order." },
  { q: "Thread-safe Map without global locking?", opts: ["Collections.synchronizedMap", "Hashtable", "HashMap plus synchronized", "ConcurrentHashMap"], ans: 3, exp: "ConcurrentHashMap Java 8: reads are lock-free using volatile, writes use CAS plus per-bucket synchronization. Collections.synchronizedMap wraps every method with one lock. ConcurrentHashMap gives much higher throughput under contention." },
  { q: "PriorityQueue Java default ordering?", opts: ["Insertion order", "FIFO queue order", "Min-heap with smallest element at head by natural order", "Max-heap with largest at head"], ans: 2, exp: "PriorityQueue is a min-heap by default so poll() returns smallest. For max-heap use new PriorityQueue<>(Collections.reverseOrder()). Used for top-K problems and Dijkstra's algorithm." },
  { q: "ArrayDeque vs LinkedList as a Stack?", opts: ["LinkedList always", "ArrayDeque is faster since array-backed with no per-node object allocation; Java recommends it over Stack class", "They are equivalent", "Stack class is preferred"], ans: 1, exp: "ArrayDeque is array-backed and cache-friendly with no per-element Node object overhead. Java documentation explicitly states ArrayDeque is faster than Stack and LinkedList for both stack and queue use cases. Stack is legacy extending Vector which is synchronized and slow." },
  { q: "Collections.sort() vs Arrays.sort() key difference?", opts: ["Arrays.sort on primitives uses dual-pivot QuickSort which is unstable. Both Arrays.sort on objects and Collections.sort use stable TimSort", "They are identical", "Collections.sort only works on Lists", "Arrays.sort is always faster"], ans: 0, exp: "Arrays.sort(int[]): dual-pivot QuickSort O(n log n) average, not stable but fine for primitives. Arrays.sort(Object[]) and Collections.sort: TimSort which is merge plus insertion hybrid, stable, O(n log n) worst case. Stable means equal elements keep their original relative order." },
  { q: "What does Collections.unmodifiableList return?", opts: ["A deep independent copy", "A view that throws UnsupportedOperationException on mutations while still reflecting changes to the original list", "A thread-safe list", "A sorted list"], ans: 1, exp: "unmodifiableList is a VIEW not a copy. Mutations through it throw UnsupportedOperationException. But if you modify the original list the view reflects those changes. For true immutability use List.copyOf() which creates an independent immutable snapshot." },
  { q: "List.of() vs Arrays.asList() vs new ArrayList()?", opts: ["They are identical", "Arrays.asList is faster", "List.of is truly immutable with no nulls allowed. Arrays.asList is fixed-size but set works. new ArrayList is fully mutable", "Only ArrayList is type-safe"], ans: 2, exp: "List.of() Java 9+: immutable, throws on add/set/remove, no null elements allowed. Arrays.asList(): can call set() but not add/remove since fixed-size, allows null, backed by the original array. new ArrayList(): fully mutable, use when you need structural changes." },
  { q: "CopyOnWriteArrayList when to use?", opts: ["For sorted data", "When reads heavily dominate writes since each write copies entire array but reads are completely lock-free", "For high-write scenarios", "Identical to synchronizedList"], ans: 1, exp: "Every write on CopyOnWriteArrayList copies the full array which is expensive. But reads are completely lock-free so concurrent iteration is safe without synchronization. Best for event listener lists and observer patterns where reads dominate and writes are rare." }
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
<svg viewBox="0 0 720 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:720px;display:block;margin:0 auto;font-family:'DM Sans',sans-serif">
  <defs>
    <marker id="ta" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/></marker>
    <marker id="tg" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/></marker>
  </defs>

  <!-- NEW -->
  <rect x="10" y="55" width="70" height="36" rx="8" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
  <text x="45" y="78" text-anchor="middle" font-weight="700" font-size="12" fill="#4338ca">NEW</text>

  <line x1="80" y1="73" x2="118" y2="73" stroke="#2563eb" stroke-width="2" marker-end="url(#ta)"/>
  <text x="99" y="65" text-anchor="middle" font-size="9" fill="#6b7280">start()</text>

  <!-- RUNNABLE -->
  <rect x="118" y="55" width="95" height="36" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="165" y="78" text-anchor="middle" font-weight="700" font-size="12" fill="#1d4ed8">RUNNABLE</text>

  <line x1="213" y1="73" x2="258" y2="73" stroke="#2563eb" stroke-width="2" marker-end="url(#ta)"/>
  <text x="236" y="65" text-anchor="middle" font-size="9" fill="#6b7280">scheduled</text>

  <!-- RUNNING -->
  <rect x="258" y="55" width="90" height="36" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text x="303" y="78" text-anchor="middle" font-weight="700" font-size="12" fill="#92400e">RUNNING</text>

  <!-- BLOCKED (top) -->
  <line x1="330" y1="55" x2="390" y2="25" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4" marker-end="url(#tg)"/>
  <rect x="390" y="8" width="90" height="32" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="435" y="28" text-anchor="middle" font-weight="600" font-size="11" fill="#dc2626">BLOCKED</text>
  <text x="435" y="52" text-anchor="middle" font-size="9" fill="#6b7280">waiting for lock</text>
  <line x1="390" y1="35" x2="330" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4" marker-end="url(#tg)"/>

  <!-- WAITING (bottom) -->
  <line x1="330" y1="91" x2="390" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4" marker-end="url(#tg)"/>
  <rect x="390" y="105" width="90" height="32" rx="6" fill="#fff7ed" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="435" y="125" text-anchor="middle" font-weight="600" font-size="11" fill="#d97706">WAITING</text>
  <text x="435" y="148" text-anchor="middle" font-size="9" fill="#6b7280">wait() / join()</text>
  <line x1="390" y1="115" x2="330" y2="88" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4" marker-end="url(#tg)"/>
  <text x="360" y="100" font-size="8" fill="#6b7280">notify()</text>

  <!-- Arrow to TERMINATED -->
  <line x1="348" y1="73" x2="530" y2="73" stroke="#2563eb" stroke-width="2" marker-end="url(#ta)"/>
  <text x="440" y="68" text-anchor="middle" font-size="9" fill="#6b7280">run() completes</text>

  <!-- TERMINATED -->
  <rect x="530" y="55" width="110" height="36" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
  <text x="585" y="78" text-anchor="middle" font-weight="700" font-size="12" fill="#991b1b">TERMINATED</text>
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
  { q: "Calling run() vs start() on a Thread?", opts: ["run() is deprecated", "start() is for Runnable only", "No difference", "start() creates new OS thread and calls run(); run() executes in calling thread (no new thread)"], ans: 3, exp: "The most common Java threading mistake: calling thread.run() directly executes run() in the CURRENT thread. thread.start() asks the JVM to create a new OS thread and then call run() on it. Always call start()." },
  { q: "What is a race condition?", opts: ["Thread deadlock", "Two threads accessing shared mutable state concurrently with at least one write, leading to unpredictable results", "Program running too fast", "CPU cache issue"], ans: 1, exp: "Race condition: thread safety issue where outcome depends on scheduling order. Example: two threads both read balance=100, both add 50, both write 150 — final balance should be 200. Fix: synchronize, use AtomicInteger, or use immutable data." },
  { q: "synchronized vs ReentrantLock — when to use Lock?", opts: ["No practical difference", "ReentrantLock is deprecated", "synchronized is always better", "ReentrantLock when you need: tryLock(), timed lock, interruptible lock, or fairness policy"], ans: 3, exp: "synchronized: simpler, JVM-managed, no risk of forgetting unlock. ReentrantLock: tryLock() (non-blocking attempt), lockInterruptibly() (can be interrupted), fair=true (FIFO ordering), Condition variables for more precise wait/notify control." },
  { q: "ConcurrentHashMap vs synchronized HashMap — throughput difference?", opts: ["Identical throughput", "Depends on JVM version", "synchronized HashMap is faster", "ConcurrentHashMap: lock-free reads + per-bucket writes = 16-64× higher throughput under contention"], ans: 3, exp: "synchronized HashMap: single lock — all operations serialized even reads. ConcurrentHashMap: reads use volatile (no lock), writes lock only one bucket (~1/16th of map). Under 16 threads: near-linear throughput scaling vs total serialization." },
  { q: "Java 21 virtual threads vs platform threads — main advantage?", opts: ["Virtual threads don't support synchronized", "Virtual threads are faster for CPU work", "Virtual threads have no stack", "Virtual threads (~2KB) block cheaply — JVM unmounts from OS thread during I/O, allowing millions of concurrent blocking operations"], ans: 3, exp: "Platform thread blocks OS thread during I/O (expensive, ~1MB stack). Virtual thread: JVM detects blocking I/O, unmounts virtual thread from carrier thread, carrier handles other work, remounts when I/O completes. 1M virtual threads vs ~10K platform threads." },
  { q: "What does AtomicInteger.compareAndSet(expect, update) do?", opts: ["Thread-safe conditional check", "Sets value unconditionally", "Compares two AtomicIntegers", "Atomically: if current value == expect, set to update and return true; else return false (CAS operation)"], ans: 3, exp: "CAS (Compare-And-Swap): hardware atomic instruction. Used to implement lock-free algorithms. If value was changed by another thread since you read it, CAS fails and you retry. Foundation of Java's java.util.concurrent package." },
  { q: "Deadlock — four necessary conditions?", opts: ["Priority inversion", "Two threads, one lock", "Mutual exclusion + Hold and wait + No preemption + Circular wait — ALL four must hold", "More threads than locks"], ans: 2, exp: "All four conditions must be present: 1) Mutual exclusion (resource not shareable), 2) Hold and wait (holding one resource while waiting for another), 3) No preemption (resources can't be forcibly taken), 4) Circular wait (A waits for B, B waits for A). Break any one to prevent deadlock." },
  { q: "ThreadLocal — what is it used for?", opts: ["Shared variable across threads", "Thread communication", "Immutable thread data", "Per-thread storage — each thread has its own isolated copy of the variable"], ans: 3, exp: "ThreadLocal<T>: each thread accessing the variable gets its own, independently initialized copy. Used for: user session per request (Spring's RequestContextHolder), database connections, date formatters (SimpleDateFormat isn't thread-safe). Always remove() in finally to prevent leaks in thread pools." },
  { q: "ExecutorService.shutdown() vs shutdownNow() — difference?", opts: ["shutdownNow() is safer", "They are identical", "shutdown() is immediate", "shutdown(): stop accepting new tasks, wait for running tasks to complete. shutdownNow(): interrupt running tasks, return queued tasks"], ans: 3, exp: "shutdown(): graceful — no new submissions, existing tasks complete. shutdownNow(): sends interrupt to running threads (they may or may not respond), returns list of queued tasks not started. Use shutdown() for graceful app shutdown, awaitTermination() to wait for completion." }
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

<div style="margin:14px 0">
<div style="display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:0;align-items:center">
  <div style="background:#dbeafe;border:2px solid #2563eb;border-radius:10px;padding:12px;text-align:center">
    <div style="font-weight:700;font-size:14px;color:#1e40af">Source</div>
    <div style="font-size:12px;color:#374151;margin-top:4px">Collection, Array,<br>Stream.of(), IntStream</div>
  </div>
  <div style="font-size:20px;color:#94a3b8;padding:0 6px">→</div>
  <div style="background:#fef3c7;border:2px solid #d97706;border-radius:10px;padding:12px;text-align:center">
    <div style="font-weight:700;font-size:14px;color:#92400e">Intermediate Ops</div>
    <div style="font-size:12px;color:#374151;margin-top:4px">filter, map, flatMap,<br>sorted, distinct, peek</div>
    <div style="font-size:11px;color:#b45309;margin-top:4px;font-weight:600">⚡ Lazy — no execution yet</div>
  </div>
  <div style="font-size:20px;color:#94a3b8;padding:0 6px">→</div>
  <div style="background:#dcfce7;border:2px solid #16a34a;border-radius:10px;padding:12px;text-align:center">
    <div style="font-weight:700;font-size:14px;color:#065f46">Terminal Op</div>
    <div style="font-size:12px;color:#374151;margin-top:4px">collect, forEach, reduce,<br>count, findFirst, anyMatch</div>
    <div style="font-size:11px;color:#059669;margin-top:4px;font-weight:600">🔥 Triggers execution</div>
  </div>
</div>
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
>

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
  { q: "Streams are lazy — what does this mean?", opts: ["Data is loaded lazily from disk", "They run in background threads", "They execute slowly", "Intermediate ops (filter/map) don't execute until a terminal op (collect/count) triggers the pipeline"], ans: 3, exp: "filter(), map(), sorted() — none execute immediately. They build a pipeline. Only terminal operations (collect, count, forEach, reduce, findFirst) trigger execution. This enables short-circuit optimizations like findFirst stopping after first match." },
  { q: "Stream.map() vs flatMap() — key difference?", opts: ["No practical difference", "map is faster", "flatMap requires sorted input", "map: 1-to-1 transformation. flatMap: 1-to-many, then flatten all into single stream"], ans: 3, exp: "map(f): Stream<T> → Stream<R>. flatMap(f): Stream<T> → Stream<Stream<R>> → Stream<R> (flattened). Use flatMap when each element maps to multiple elements: List<List<T>> → List<T>, or Optional<Optional<T>> → Optional<T>." },
  { q: "Collectors.groupingBy() returns what type?", opts: ["List<T>", "Map<K, List<T>>", "Optional<T>", "Set<T>"], ans: 1, exp: "groupingBy(classifier) → Map<K, List<T>>. Downstream collectors: groupingBy(f, counting()) → Map<K, Long>; groupingBy(f, mapping(g, toList())) → Map<K, List<R>>; partitioningBy(predicate) → Map<Boolean, List<T>>." },
  { q: "When should you NOT use parallel streams?", opts: ["For I/O-bound, small collections, ordered operations, or stateful/non-associative reductions", "Parallel is always equivalent", "Always use parallel", "For sorted data only"], ans: 0, exp: "Avoid parallel streams: 1) Small collections (fork/join overhead > gain), 2) I/O-bound (threads block, no benefit), 3) Operations requiring encounter order, 4) Stateful lambdas (shared mutable state = race conditions), 5) Streams with side effects." },
  { q: "Stream.reduce(0, Integer::sum) vs Stream.collect(Collectors.summingInt()) — difference?", opts: ["reduce is general fold; Collectors.summingInt is optimised with less boxing — prefer summingInt for numeric sums", "summingInt doesn't work with primitives", "reduce is always faster", "They are identical in performance"], ans: 0, exp: "reduce with Integer::sum boxes/unboxes for each element. Collectors.summingInt(Function<T, Integer>) uses IntStream internally to minimize boxing. For numeric operations on streams: prefer summingInt, averagingInt, summarizingInt over reduce." },
  { q: "What does Optional.orElseGet() vs Optional.orElse() do differently?", opts: ["They are identical", "orElse(val) always evaluates val; orElseGet(() -> val) lazy — only called if Optional is empty", "orElseGet is deprecated", "orElse is for primitives only"], ans: 1, exp: "orElse(expensiveOperation()) — ALWAYS calls expensiveOperation() even if Optional has value. orElseGet(() -> expensiveOperation()) — only calls if Optional is empty. Always prefer orElseGet when default requires computation, DB call, or object creation." },
  { q: "Collectors.joining() — what does it do?", opts: ["Concatenates stream of strings with optional delimiter, prefix, suffix", "Counts elements", "Joins two streams", "Creates a new list"], ans: 0, exp: "Collectors.joining(): concatenate strings. joining(', '): with delimiter. joining(', ', '[', ']'): with delimiter, prefix, suffix. Example: Stream.of('a','b','c').collect(joining(', ','[',']')) = '[a, b, c]'. Very useful for building formatted strings." },
  { q: "IntStream.range(0, 5) vs IntStream.rangeClosed(0, 5)?", opts: ["They are identical", "range always includes 0", "range(0,5): 0,1,2,3,4 (exclusive end). rangeClosed(0,5): 0,1,2,3,4,5 (inclusive end)", "rangeClosed is deprecated"], ans: 2, exp: "range(start, end): [start, end) — standard exclusive end. rangeClosed(start, end): [start, end] — inclusive. IntStream.range(0,5).sum() = 10. IntStream.rangeClosed(1,100).sum() = 5050. Use rangeClosed when you need inclusive iteration." },
  { q: "Stream.peek() — what is it actually for?", opts: ["Collecting to a list", "Filtering elements", "Debugging only — non-interfering, non-consuming action for logging/inspecting, doesn't change elements", "Modifying stream elements"], ans: 2, exp: "peek(action) is intended for debugging: .peek(System.out::println) to inspect elements. It's an intermediate op that passes each element through unchanged after applying the action. Avoid side effects in peek() in production — use forEach as terminal op instead." },
  { q: "How to convert Stream<Integer> to int[]?", opts: ["stream.toArray()", "Arrays.toIntArray(stream)", "stream.mapToInt(Integer::intValue).toArray()", "stream.collect(toArray())"], ans: 2, exp: "Stream<Integer>.toArray() returns Object[]. To get int[]: mapToInt(Integer::intValue).toArray() — converts to IntStream (unboxed), then toArray() returns int[]. Or: stream.mapToInt(x->x).toArray() using auto-unboxing. Always use primitive streams for numeric arrays." }
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
  { q: "Where are objects stored in Java?", opts: ["Heap — all objects created with 'new' are on the heap", "Stack", "Code Cache", "Metaspace"], ans: 0, exp: "Stack: primitives and object references (pointers), method frames, local variables — auto-freed when method returns. Heap: actual objects — GC managed. Metaspace: class metadata, method bytecode. Stack is per-thread; Heap is shared." },
  { q: "What replaced PermGen in Java 8?", opts: ["Metaspace — stores class metadata in native memory, auto-grows", "Young Generation", "Code Cache", "Old Generation"], ans: 0, exp: "PermGen (Permanent Generation) in heap → fixed size → frequent OutOfMemoryError: PermGen space. Java 8: Metaspace in native memory (off-heap) → auto-grows by default (configurable with -XX:MaxMetaspaceSize). Eliminates most PermGen OOMEs." },
  { q: "Minor GC vs Major GC — what's the difference?", opts: ["Minor GC: Young Gen only (fast, frequent). Major/Full GC: Old Gen + Young Gen (slow, stop-the-world)", "Minor GC runs on Metaspace", "They are the same", "Major GC only runs once"], ans: 0, exp: "Minor GC: Eden + Survivor spaces, fast (milliseconds), most objects die young (infant mortality). Major/Full GC: Old Gen which is much larger, can take seconds, stop-the-world pause. Design to minimize long-lived object promotion to Old Gen." },
  { q: "What causes java.lang.OutOfMemoryError: Java heap space?", opts: ["Objects accumulating faster than GC can free — memory leak or heap too small", "Too many String literals", "Too many threads", "Stack overflow"], ans: 0, exp: "Heap OOM: 1) True memory leak (objects referenced but never freed — common in static collections, caches), 2) Heap genuinely too small for workload (increase -Xmx), 3) Large objects (huge arrays, loading entire DB table). Use heap dump + VisualVM/MAT to diagnose." },
  { q: "Difference between -Xms and -Xmx JVM flags?", opts: ["-Xms: initial heap size (allocated at startup). -Xmx: maximum heap size. JVM grows heap from Xms to Xmx as needed", "-Xms is max, -Xmx is min", "-Xmx sets stack size", "They are the same flag"], ans: 0, exp: "Best practice: set Xms == Xmx in production (e.g., -Xms2g -Xmx2g). This pre-allocates full heap — avoids JVM pausing to grow heap under load. For dev: Xms small, Xmx large. Container environments: set both to avoid OOMKilled." },
  { q: "What is a memory leak in Java (GC language)?", opts: ["Stack overflow error", "Objects that are still referenced but will never be used again — GC can't collect referenced objects", "Impossible in Java", "Any OOM error"], ans: 1, exp: "Java GC can only collect unreachable objects. A memory leak = objects reachable (held in collections, listeners, caches) but logically dead. Common: static Map that grows forever, event listeners never removed, ThreadLocal not cleaned in thread pools." },
  { q: "G1 GC vs Parallel GC — key trade-off?", opts: ["G1: short predictable pauses (configurable target). Parallel GC: higher throughput but potentially long pauses", "G1 requires more heap", "Parallel GC uses less CPU", "G1 is always better"], ans: 0, exp: "Parallel GC: maximises throughput, pauses can be long but overall more work done. G1: divides heap into regions, targets pause time goal (-XX:MaxGCPauseMillis=200), better for latency-sensitive apps. G1 is default since Java 9 for a reason." },
  { q: "String interning — what does String.intern() do?", opts: ["Converts to immutable", "Creates a new String", "Encrypts the string", "Returns the canonical pool reference — if pool has this string, return that ref; else add to pool"], ans: 3, exp: "s.intern() checks String Pool: if equal string exists, returns pool reference (same object). If not, adds s to pool and returns it. Useful for memory optimization when you have millions of duplicate strings (e.g., status codes, country names). After intern(), == works for equality." },
  { q: "Stack overflow error — most common cause?", opts: ["Too many objects on heap", "Too many threads", "Unbounded recursion — each method call adds a frame to stack; default stack depth ~500-1000 frames", "Integer overflow"], ans: 2, exp: "Each thread has a fixed-size stack (~512KB default). Each method call pushes a frame (local vars, return address). Unbounded recursion = stack fills up → StackOverflowError. Fix: convert to iteration, or increase stack size (-Xss), or add base case." }
])}`;

// ─── SPRING ──────────────────────────────────────────────────────────────────
pages['spring-core'] = () => `
<div class="page-header">
  <div class="breadcrumb">Spring</div>
  <h1 class="page-title">Spring Boot Core</h1>
  <p class="page-subtitle">IoC, DI, AOP, Transactions, JPA, and REST API design.</p>
  ${revisionControls('spring-core')}
</div>

<div class="callout callout-blue" style="margin-bottom:16px">
  <strong>What is Spring?</strong> A comprehensive Java framework for building enterprise applications. At its core: IoC container manages object lifecycle, DI wires dependencies, AOP handles cross-cutting concerns.<br><br>
  <strong>What is Spring Boot?</strong> An opinionated layer on top of Spring that auto-configures everything. Embedded Tomcat, no XML, starter dependencies, production-ready defaults. <code>@SpringBootApplication</code> = <code>@Configuration</code> + <code>@EnableAutoConfiguration</code> + <code>@ComponentScan</code>.
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

<h2 class="section-title">Bean Scopes</h2>
<table class="data-table">
  <tr><th>Scope</th><th>Lifecycle</th><th>Use Case</th></tr>
  <tr><td><strong>Singleton</strong></td><td>One instance per IoC container (default)</td><td>Stateless services, repositories — most beans</td></tr>
  <tr><td><strong>Prototype</strong></td><td>New instance every time requested</td><td>Stateful beans, builders, short-lived objects</td></tr>
  <tr><td><strong>Request</strong></td><td>One per HTTP request</td><td>Request-scoped data (web apps only)</td></tr>
  <tr><td><strong>Session</strong></td><td>One per HTTP session</td><td>User session data (web apps only)</td></tr>
</table>
<div class="callout callout-amber">
  <strong>Common trap:</strong> Injecting a Prototype bean into a Singleton → you get the SAME prototype instance forever. Fix: use <code>ObjectProvider&lt;T&gt;</code> or <code>@Lookup</code> method to get fresh instances.
</div>

<h2 class="section-title">Two-Level Caching — EhCache + Redis</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Architecture: L1 (in-memory) + L2 (distributed) <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;font-family:'DM Mono',monospace;font-size:13px;line-height:2.2;margin-bottom:12px">
        Request → <strong>L1: EhCache</strong> (in-process, ~1μs) → hit? return<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;miss → <strong>L2: Redis</strong> (network, ~1ms) → hit? return + populate L1<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;miss → <strong>Database</strong> → return + populate L2 + L1
      </div>
      <div class="code-block"><pre><span class="cm">// CompositeCacheManager combines both layers</span>
<span class="ann">@Configuration</span>
<span class="ann">@EnableCaching</span>
<span class="kw">public class</span> CacheConfig {
  <span class="ann">@Bean</span>
  <span class="kw">public</span> CacheManager cacheManager() {
    <span class="kw">return new</span> CompositeCacheManager(
      ehCacheManager(),    <span class="cm">// L1: in-process, fast, limited size</span>
      redisCacheManager()  <span class="cm">// L2: distributed, shared across instances</span>
    );
  }
}

<span class="cm">// Service layer — Spring handles L1/L2 transparently</span>
<span class="ann">@Cacheable</span>(value = <span class="str">"users"</span>, key = <span class="str">"#id"</span>)
<span class="kw">public</span> User getUserById(Long id) {
  <span class="kw">return</span> userRepository.findById(id).orElse(<span class="kw">null</span>);
}

<span class="ann">@CacheEvict</span>(value = <span class="str">"users"</span>, key = <span class="str">"#user.id"</span>)
<span class="kw">public</span> User updateUser(User user) {
  <span class="kw">return</span> userRepository.save(user);  <span class="cm">// evicts from both L1 + L2</span>
}</pre></div>
    </div>
  </div>
</div>

${quizHTML('spring-core', [
  { q: "What does @SpringBootApplication combine?", opts: ["@RestController + @Service", "@Configuration + @EnableAutoConfiguration + @ComponentScan", "@Bean + @Component", "Only @ComponentScan"], ans: 1, exp: "@Configuration: class defines beans. @EnableAutoConfiguration: reads spring.factories, configures beans based on classpath (add spring-boot-starter-web → configures Tomcat, DispatcherServlet). @ComponentScan: scans for @Component, @Service, @Repository, @Controller." },
  { q: "Why prefer constructor injection over field injection?", opts: ["Constructor injection: immutable fields (final), explicit dependencies, testable without Spring, fail-fast on missing deps", "Constructor injection is faster", "Field injection is deprecated", "They're equivalent"], ans: 0, exp: "Field injection (@Autowired on field): requires reflection, can't be final (not immutable), requires Spring to test (can't use plain new). Constructor injection: explicit, immutable, testable with new MyService(mockRepo), circular deps fail at startup not runtime." },
  { q: "What is Spring AOP proxy-based and what does it mean for self-invocation?", opts: ["AOP works on all method calls", "Proxies are applied to all classes", "Self-invocation creates a new proxy", "Spring AOP uses proxies — calling a @Transactional method from within the same class bypasses the proxy (no transaction!)"], ans: 3, exp: "Spring AOP wraps beans in JDK/CGLIB proxies. External call → goes through proxy → aspect applied. Self-call (this.method()) → goes directly to the bean, bypasses proxy → @Transactional/@Cacheable annotations ignored! Fix: inject self, use AspectJ weaving, or restructure." },
  { q: "@Transactional(readOnly=true) — what does it do?", opts: ["Hints ORM to disable dirty checking + possible read-replica routing — performance optimisation", "Throws exception on any write", "Prevents all writes permanently", "Same as no annotation"], ans: 0, exp: "readOnly=true: 1) Hibernate disables dirty checking (no flush at commit, skips scanning all managed entities), 2) Spring can route to read replicas in configured setups, 3) DB can optimise (no write intent locks). Not a hard constraint — just a hint." },
  { q: "Bean scopes — what is 'prototype' scope?", opts: ["New instance created every time the bean is requested/injected", "One instance per HTTP request", "One instance per application", "One instance per session"], ans: 0, exp: "Singleton (default): one instance per container — shared everywhere. Prototype: new instance per injection/getBean() — not managed after creation (no @PreDestroy called). Request: one per HTTP request. Session: one per HTTP session. Use prototype for stateful helper objects." },
  { q: "What problem does @Transactional(propagation=REQUIRES_NEW) solve?", opts: ["Creates a new independent transaction — inner transaction commits/rolls back independently of outer transaction", "Nothing special", "Speeds up transactions", "Converts checked to unchecked exceptions"], ans: 0, exp: "REQUIRES_NEW: suspends outer transaction, creates new one. Inner transaction commits even if outer rolls back. Use case: audit logging — always save audit record even if main operation fails. Default REQUIRED: joins existing transaction or creates new if none." },
  { q: "Spring Data JPA — N+1 query problem?", opts: ["N+1 means you need N+1 repositories", "No such problem in Spring Data", "Loading a list of entities then accessing @OneToMany lazily = 1 query for list + N queries for each collection", "Only affects @ManyToMany"], ans: 2, exp: "N+1: 1 query gets 100 orders, then accessing order.getItems() fires 1 query per order = 101 queries. Fix: @EntityGraph or JOIN FETCH in JPQL: @Query('SELECT o FROM Order o JOIN FETCH o.items'). Or @BatchSize(size=10) for batching lazy loads." },
  { q: "How does @Cacheable work in Spring?", opts: ["Manually stores in Redis", "Caches only String results", "Spring generates proxy that checks cache before method call, stores result if cache miss", "Works without any cache backend"], ans: 2, exp: "@Cacheable('users'): proxy intercepts call → checks cache by key (default=method args) → if hit, return cached value without calling method → if miss, call method, store result, return. Combine with @CacheEvict to invalidate. Needs a CacheManager bean (Redis, Caffeine, EhCache)." },
  { q: "Circuit breaker OPEN state — what happens to requests?", opts: ["Requests fail fast immediately (call fallback or throw exception) without attempting the remote call", "Requests go to a backup service", "Requests retry automatically", "Requests queue up"], ans: 0, exp: "States: CLOSED (normal, calls pass through), OPEN (failure threshold exceeded, all calls fail fast to fallback), HALF_OPEN (test period, limited calls allowed to check if service recovered). Prevents thread pool exhaustion from slow downstream services." },
  { q: "What is @ConditionalOnProperty used for?", opts: ["Conditionally create a bean only if a specific property has a specific value — feature flags for auto-config", "Setting property values", "Validating configuration", "Reading properties"], ans: 0, exp: "@ConditionalOnProperty(name='feature.dark-mode', havingValue='true') — bean created only if application.properties has feature.dark-mode=true. Core mechanism of Spring Boot auto-configuration: DataSource bean created only if spring.datasource.url is set." }
])}`;

// ─── GO ──────────────────────────────────────────────────────────────────────
pages['go-core'] = () => `
<div class="page-header">
  <div class="breadcrumb">Golang</div>
  <h1 class="page-title">Golang — Concurrency & Core Concepts</h1>
  <p class="page-subtitle">Goroutines, channels, select, WaitGroup, defer — and why Go beats Java for concurrent services.</p>
  ${revisionControls('go-core')}
</div>

<div class="elon-box">
  <strong>⚡ Go's concurrency mantra:</strong> "Don't communicate by sharing memory; share memory by communicating." Use channels to pass data between goroutines instead of shared variables + locks.
</div>

<h2 class="section-title">Go vs Java — Key Differences</h2>
<table class="data-table">
  <tr><th></th><th>Go</th><th>Java</th></tr>
  <tr><td><strong>Threading model</strong></td><td>M:N goroutines (millions possible, ~2KB)</td><td>1:1 OS threads (thousands, ~1MB each)</td></tr>
  <tr><td><strong>Concurrency primitive</strong></td><td>Goroutines + channels (CSP model)</td><td>Threads + synchronized/locks</td></tr>
  <tr><td><strong>Startup time</strong></td><td>~10ms (compiled binary)</td><td>~200ms–1s (JVM warmup)</td></tr>
  <tr><td><strong>Memory footprint</strong></td><td>Very low (no JVM overhead)</td><td>Higher (JVM heap, metaspace)</td></tr>
  <tr><td><strong>Garbage collection</strong></td><td>Low-latency GC (&lt;1ms pauses)</td><td>Generational GC (ZGC: ~1ms, G1: ~200ms)</td></tr>
  <tr><td><strong>Compilation</strong></td><td>Compiles to native binary, fast</td><td>JIT-compiled bytecode</td></tr>
  <tr><td><strong>Error handling</strong></td><td>Explicit error values (if err != nil)</td><td>try/catch exceptions</td></tr>
  <tr><td><strong>Generics</strong></td><td>Yes (Go 1.18+)</td><td>Yes (Java 5+, more mature)</td></tr>
  <tr><td><strong>Best for</strong></td><td>Network services, CLIs, cloud-native tools</td><td>Enterprise apps, Android, large codebases</td></tr>
</table>

<h2 class="section-title">Go Basics</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Variables, Types, Functions <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre>package main
import "fmt"

// Multiple return values (no exceptions — return error explicitly)
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

func main() {
    // := infers type (short declaration, function-local only)
    x := 42
    name := "Go"
    pi := 3.14

    // Multiple assignment
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("Result: %.2f\n", result) // 5.00

    // Zero values (Go initialises all vars to zero value)
    var count int     // 0
    var flag bool     // false
    var msg string    // ""
    _, _ = count, flag  // _ = discard
    _ = msg
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Structs, Interfaces, Methods <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre>// Struct (Go's "class")
type Animal struct {
    Name  string
    Sound string
}

// Method with pointer receiver (can modify struct)
func (a *Animal) Speak() string {
    return a.Name + " says " + a.Sound
}

// Interface — implicit implementation (no "implements" keyword!)
type Speaker interface {
    Speak() string
}

type Dog struct { Animal }
type Cat struct { Animal }

// Both Dog and Cat implement Speaker automatically
func makeNoise(s Speaker) {
    fmt.Println(s.Speak())
}

// Embedding (Go's "inheritance")
type ServiceDog struct {
    Animal             // embed Animal
    Badge string
}
// ServiceDog gets Animal's methods automatically</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Slices &amp; Maps <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre>// Slices (dynamic array, backed by array)
nums := []int{1, 2, 3}
nums = append(nums, 4, 5)        // [1 2 3 4 5]
sub := nums[1:3]                  // [2 3] — shares underlying array
copy := append([]int{}, nums...) // deep copy

// Maps
scores := map[string]int{
    "Alice": 95,
    "Bob":   87,
}
scores["Charlie"] = 92
val, ok := scores["Alice"]  // ok=true if key exists
if !ok { fmt.Println("not found") }
delete(scores, "Bob")

// Iterate
for key, val := range scores {
    fmt.Printf("%s: %d\n", key, val)
}</pre></div>
    </div>
  </div>
</div>

<h2 class="section-title">Goroutines</h2>
<div class="callout callout-blue">
  A goroutine is a lightweight thread managed by the Go runtime. ~2KB initial stack (grows as needed). You can have <strong>millions</strong> simultaneously. The Go scheduler multiplexes goroutines onto OS threads (M:N model) using GOMAXPROCS CPUs.
</div>
<div class="code-block"><pre>func fetchData(url string, results chan&lt;- string) {
    resp, _ := http.Get(url)
    defer resp.Body.Close()
    body, _ := io.ReadAll(resp.Body)
    results &lt;- string(body)
}

func main() {
    urls := []string{"https://api1.com", "https://api2.com", "https://api3.com"}
    results := make(chan string, len(urls))

    // Launch all fetches concurrently
    for _, url := range urls {
        go fetchData(url, results)  // go keyword = new goroutine
    }

    // Collect all results
    for range urls {
        fmt.Println(&lt;-results)
    }
}</pre></div>

<h2 class="section-title">Channels</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Unbuffered vs Buffered <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre>// Unbuffered — synchronisation point (both goroutines must be ready)
ch := make(chan int)
go func() { ch &lt;- 42 }()  // blocks until receiver ready
val := &lt;-ch                // blocks until sender sends

// Buffered — async queue (sender doesn't block until buffer full)
ch := make(chan int, 3)
ch &lt;- 1  // doesn't block
ch &lt;- 2  // doesn't block
ch &lt;- 3  // doesn't block
// ch &lt;- 4  // would BLOCK — buffer full

// Range over channel (drain until closed)
jobs := make(chan int, 5)
for i := 0; i &lt; 5; i++ { jobs &lt;- i }
close(jobs)  // MUST close to stop range loop
for j := range jobs { fmt.Println(j) }</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">select — multiplex channels <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre>// select handles whichever channel is ready first
ticker := time.NewTicker(1 * time.Second)
done   := make(chan bool)

go func() {
    time.Sleep(5 * time.Second)
    done &lt;- true
}()

for {
    select {
    case t := &lt;-ticker.C:
        fmt.Println("Tick at", t)
    case &lt;-done:
        fmt.Println("Done!")
        ticker.Stop()
        return
    case &lt;-time.After(10 * time.Second):
        fmt.Println("Timeout")  // overall timeout
        return
    }
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Worker Pool Pattern <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre>// Classic worker pool: fixed concurrency over arbitrary workload
func workerPool(numWorkers int, jobs &lt;-chan int) &lt;-chan int {
    results := make(chan int, numWorkers)
    var wg sync.WaitGroup

    for i := 0; i &lt; numWorkers; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for job := range jobs {   // range blocks until jobs closed
                results &lt;- process(job)
            }
        }()
    }

    // Close results when all workers done
    go func() { wg.Wait(); close(results) }()
    return results
}

// Usage
jobs := make(chan int, 100)
results := workerPool(5, jobs)  // 5 concurrent workers

for i := 0; i &lt; 100; i++ { jobs &lt;- i }
close(jobs)  // signal workers to stop

for r := range results { fmt.Println(r) }</pre></div>
    </div>
  </div>
</div>

<h2 class="section-title">sync.WaitGroup, Mutex, Once</h2>
<div class="code-block"><pre>// WaitGroup — wait for goroutines to finish
var wg sync.WaitGroup
for i := 0; i &lt; 5; i++ {
    wg.Add(1)
    go func(id int) {        // pass i as param — avoid closure capture bug!
        defer wg.Done()
        fmt.Printf("Worker %d done\n", id)
    }(i)
}
wg.Wait()

// Mutex — protect shared state
var mu sync.Mutex
counter := 0
for i := 0; i &lt; 1000; i++ {
    go func() {
        mu.Lock()
        counter++
        mu.Unlock()
    }()
}

// sync.Once — run exactly once (singleton, init)
var once sync.Once
var instance *DB
func getInstance() *DB {
    once.Do(func() { instance = &DB{} })
    return instance
}

// sync.RWMutex — multiple readers OR one writer
var rwmu sync.RWMutex
rwmu.RLock()   // read lock (multiple goroutines can hold)
defer rwmu.RUnlock()
// OR
rwmu.Lock()    // write lock (exclusive)
defer rwmu.Unlock()</pre></div>

<h2 class="section-title">Context — cancellation & timeouts</h2>
<div class="code-block"><pre>// Context carries deadlines, cancellation signals, and request-scoped values
func fetchWithTimeout(url string) ([]byte, error) {
    ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
    defer cancel()  // ALWAYS defer cancel to free resources

    req, _ := http.NewRequestWithContext(ctx, "GET", url, nil)
    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        if errors.Is(err, context.DeadlineExceeded) {
            return nil, fmt.Errorf("request timed out")
        }
        return nil, err
    }
    defer resp.Body.Close()
    return io.ReadAll(resp.Body)
}

// Propagate cancellation through call chain
func processRequest(ctx context.Context) {
    ctx, cancel := context.WithCancel(ctx)
    defer cancel()

    go func() {
        // If parent context cancelled, this returns immediately
        doDBQuery(ctx)  // passes context down
    }()
}</pre></div>

<h2 class="section-title">Error Handling & defer</h2>
<div class="code-block"><pre>// Go: errors are values, not exceptions
func readFile(path string) ([]byte, error) {
    f, err := os.Open(path)
    if err != nil {
        return nil, fmt.Errorf("readFile: %w", err)  // %w wraps for errors.Is()
    }
    defer f.Close()  // LIFO: runs when function returns, even on panic

    return io.ReadAll(f)
}

// Caller handles errors explicitly
data, err := readFile("config.json")
if err != nil {
    if errors.Is(err, os.ErrNotExist) {
        log.Println("Config not found, using defaults")
    } else {
        return fmt.Errorf("startup: %w", err)
    }
}

// panic/recover (like try/catch — use sparingly)
func safeDiv(a, b int) (result int, err error) {
    defer func() {
        if r := recover(); r != nil {
            err = fmt.Errorf("recovered panic: %v", r)
        }
    }()
    return a / b, nil  // panics if b==0, recover catches it
}</pre></div>

${quizHTML('go-core', [
  { q: "What is a goroutine?", opts: ["An OS thread managed by the kernel", "A Go module component", "A coroutine needing manual yield", "A lightweight thread managed by Go runtime (~2KB initial stack, M:N scheduling)"], ans: 3, exp: "Goroutines start with ~2KB stack (grows as needed), managed by Go's runtime scheduler. Millions can coexist. GOMAXPROCS goroutines run in parallel on OS threads. Much cheaper than Java threads (~1MB each)." },
  { q: "Unbuffered channel: sender blocks until?", opts: ["Channel is closed", "Buffer has space", "1 second timeout", "A receiver is ready to read"], ans: 3, exp: "Unbuffered channels synchronise goroutines: both sender AND receiver must be ready simultaneously. The first to arrive blocks until the other shows up. This makes them perfect rendezvous synchronisation points." },
  { q: "Go interfaces vs Java interfaces — key difference?", opts: ["Go interfaces can't have methods", "Java interfaces are faster", "Go has no interfaces", "Go uses implicit implementation — no 'implements' keyword needed"], ans: 3, exp: "In Java you explicitly declare 'implements Runnable'. In Go, if a type has all the methods an interface requires, it implements it automatically — no declaration needed. This enables duck typing with compile-time safety." },
  { q: "Why always defer cancel() after context.WithTimeout?", opts: ["It starts the timer", "cancel() is optional", "It releases resources even if deadline isn't reached — prevents goroutine leaks", "It resets the timeout"], ans: 2, exp: "WithTimeout creates a timer goroutine. If your function returns before the timeout fires (happy path), defer cancel() cleans up that goroutine immediately. Without it, the goroutine leaks until the timer fires." },
  { q: "sync.WaitGroup vs channels for goroutine coordination?", opts: ["WaitGroup: wait for N goroutines to finish (no data). Channel: pass data between goroutines + synchronise", "WaitGroup is deprecated in Go 1.21", "They are identical", "Channels are always better"], ans: 0, exp: "WaitGroup: Add(n) → N goroutines each call Done() → Wait() blocks until all done. Use when you just need 'wait for all'. Channels: use when goroutines need to pass results/signals. Worker pool uses both." },
  { q: "Go error handling vs Java exceptions — advantage?", opts: ["Java exceptions are faster", "Go errors are explicit values — callers MUST handle them; can't silently ignore like unchecked exceptions", "Go doesn't support error handling", "No real difference"], ans: 1, exp: "In Go, if a function can fail it returns (value, error). The caller MUST handle the error or explicitly ignore it with _. Java unchecked exceptions (RuntimeException) can silently propagate. Go makes all error paths visible at compile time." },
  { q: "What does close(channel) signal to range loops?", opts: ["Deletes all data in the channel", "Cancels pending sends", "Tells range to stop iterating after all buffered values are consumed", "Causes a panic"], ans: 2, exp: "close(ch) signals that no more values will be sent. A range loop over the channel processes all remaining buffered values, then exits. Without close(), range blocks forever. This is the standard producer-consumer pattern in Go." },
  { q: "Go vs Java startup time — why is Go faster?", opts: ["Go uses less RAM at startup", "Go has less code", "Go compiles to native binary — no JVM to start, no JIT warmup, no class loading", "Go skips all initialisation"], ans: 2, exp: "Java starts the JVM (~100-500ms), loads classes, JIT-compiles hot paths. Go compiles to a self-contained native binary — it starts in ~10ms. Critical for serverless functions, CLIs, and rapid scale-out of microservices." },
  { q: "sync.RWMutex advantage over sync.Mutex?", opts: ["No difference", "Multiple goroutines can hold RLock simultaneously; only exclusive Lock blocks all — perfect for read-heavy workloads", "RWMutex is always faster", "RWMutex is simpler"], ans: 1, exp: "Mutex: only 1 goroutine at a time (even readers block readers). RWMutex: N readers can hold RLock simultaneously, but a writer needs exclusive Lock. For a cache with 99% reads, RWMutex gives massive throughput improvement." }
])}
`;
